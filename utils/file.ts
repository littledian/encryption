export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  setTimeout(() => {
    URL.revokeObjectURL(url);
    link.remove();
  }, 100);
}

export async function base64ToFile(base64: string, fileName: string): Promise<File> {
  const res = await fetch(base64);
  const blob = await res.blob();
  return new File([blob], fileName);
}

export async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.readAsDataURL(blob);
  });
}
