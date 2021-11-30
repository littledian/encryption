import { scryptSync, randomUUID, randomFillSync, createCipheriv, createDecipheriv } from 'crypto';

const algorithm = 'aes-192-cbc';

let key: Buffer;
let iv: Uint8Array;
let lastTimestamp = Date.now();

function updateKeyAndIv() {
  if (Date.now() - lastTimestamp < 24 * 60 * 60 * 1000 && key) return;
  const password = randomUUID();
  const salt = randomUUID();
  key = scryptSync(password, salt, 24);
  iv = randomFillSync(new Uint8Array(16));
  lastTimestamp = Date.now();
}

function verifyCipherText(s: string): boolean {
  return /^[0-9a-f]+/.test(s) && s.length % 32 === 0;
}

export async function encrypt(s: string): Promise<string> {
  updateKeyAndIv();
  return new Promise((resolve, reject) => {
    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = '';
    cipher.setEncoding('hex');
    cipher.on('data', (chunk) => {
      encrypted += chunk;
    });
    cipher.on('end', () => {
      resolve(encrypted);
    });
    cipher.on('error', (e) => reject(e));

    cipher.write(s);
    cipher.end();
  });
}

export async function decrypt(s: string): Promise<string> {
  if (!verifyCipherText(s)) return Promise.reject(new Error('格式不正确'));
  updateKeyAndIv();
  return new Promise((resolve, reject) => {
    const decipher = createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(false);
    let decrypted = '';
    decipher.on('readable', () => {
      let chunk = decipher.read();
      while (null !== chunk) {
        decrypted += chunk.toString('utf8');
        chunk = decipher.read();
      }
    });
    decipher.on('end', () => resolve(decrypted));
    decipher.on('error', (e) => reject(e));

    decipher.write(s, 'hex');
    decipher.end();
  });
}
