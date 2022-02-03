import type { NextPage } from 'next';

import { Button, Input, Typography } from 'antd';
import { useCallback, useState } from 'react';

import styles from '../styles/Base64.module.scss';

const Encryption: NextPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);
  const handleUploadFile = useCallback(() => {}, []);
  const handleDownloadFile = useCallback(() => {}, []);
  const handleTransBase64ToFile = useCallback(() => {}, []);
  const handleTransFileToBase64 = useCallback(() => {}, []);

  return (
    <div className={styles.root}>
      <Typography.Title className={styles.title}>Base64转换</Typography.Title>
      <div className={styles.actions}>
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
