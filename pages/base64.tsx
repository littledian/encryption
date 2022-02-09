import type { NextPage } from 'next';

import { Button, Input, Typography } from 'antd';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { base64ToFile, blobToBase64, downloadBlob } from '../utils/file';

import styles from '../styles/Base64.module.scss';

const Encryption: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
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
    if (!fileRef.current) return;
    downloadBlob(fileRef.current, fileRef.current.name);
  }, []);
  const handleTransBase64ToFile = useCallback(async () => {
    const file = await base64ToFile(inputValue, 'base64_file');
    fileRef.current = file;
    setUrl(await blobToBase64(file));
  }, [inputValue]);
  const handleTransFileToBase64 = useCallback(async () => {
    if (!fileRef.current) return;
    const s = await blobToBase64(fileRef.current);
    setInputValue(s);
    setUrl(s);
  }, []);
  const handleFileChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    fileRef.current = file;
    setUrl(await blobToBase64(fileRef.current));
  }, []);

  return (
    <div className={styles.root}>
      <Typography.Title className={styles.title}>Base64转换</Typography.Title>
      <img src={url} alt="" height={200} />
      <div className={styles.actions}>
        <input
          className={styles.fileInput}
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          multiple={false}
        />
        <Button className={styles.btn} onClick={handleUploadFile}>
          上传文件
        </Button>
        <Button className={styles.btn} onClick={handleDownloadFile}>
          下载文件
        </Button>
        <Button className={styles.btn} onClick={handleTransFileToBase64}>
          转换成Base64
        </Button>
        <Button className={styles.btn} onClick={handleTransBase64ToFile}>
          转换成文件
        </Button>
      </div>
      <Input.TextArea
        className={styles.input}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default Encryption;
