import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

import Title from '@/components/Title';
import { base64ToFile, blobToBase64, downloadBlob } from '@/utils/file';

import styles from './index.module.scss';

export default function Base64Img() {
  const [inputValue, setInputValue] = useState('');
  const inputValueRef = useRef('');
  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);
  const [url, setUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<File | null>(null);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);
  const handleUploadFile = useCallback(() => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }, []);
  const handleDownloadFile = useCallback(async () => {
    if (!inputValueRef.current) return;
    const match = inputValueRef.current.match(/^data:image\/(.+);base64,.+/);
    const file = await base64ToFile(
      inputValueRef.current,
      `download.${match ? match[1] : 'png'}`
    );
    downloadBlob(file, file.name);
  }, []);
  const handleFileChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      fileRef.current = file;
      const base64 = await blobToBase64(fileRef.current);
      setUrl(base64);
      setInputValue(base64);
    },
    []
  );

  return (
    <div className={styles.root}>
      <Title>工具 - Base64图片转换</Title>
      <Typography variant="h5" className={styles.title}>
        Base64图片转换
      </Typography>
      <div className={styles.imgWrap} style={{ borderWidth: url ? 0 : 1 }}>
        <img src={url} alt="" className={styles.img} />
      </div>
      <div className={styles.actions}>
        <input
          className={styles.fileInput}
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleFileChange}
          multiple={false}
        />
        <Button
          variant="outlined"
          className={styles.btn}
          onClick={handleUploadFile}
        >
          上传图片
        </Button>
        <Button
          variant="outlined"
          className={styles.btn}
          onClick={handleDownloadFile}
        >
          下载图片
        </Button>
      </div>
      <TextField
        multiline
        rows={7}
        className={styles.input}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}
