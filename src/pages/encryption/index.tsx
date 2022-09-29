import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { error } from '@/utils/message';

import Title from '@/components/Title';
import http from '@/utils/http';

import styles from './index.module.scss';

export default function Encryption() {
  const [inputVal, setInputVal] = useState('');
  const [outputVal, setOutputVal] = useState('');

  const handleEncrypt = async () => {
    try {
      const res = await http.post('/api/utils/encrypt', { data: inputVal });
      setOutputVal(res);
    } catch (e: any) {
      error(e.message);
    }
  };

  const handleDecrypt = async () => {
    try {
      const res = await http.post('/api/utils/decrypt', { data: inputVal });
      setOutputVal(res);
    } catch (e: any) {
      error(e.message);
    }
  };

  const handleClear = () => {
    setInputVal('');
    setOutputVal('');
  };

  return (
    <div className={styles.root}>
      <Title>工具 - 加解密</Title>
      <Typography variant="h5" className={styles.title}>
        加解密
      </Typography>
      <TextField
        multiline
        rows={7}
        className={styles.input}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div className={styles.actions}>
        <Button
          variant="outlined"
          className={styles.btn}
          onClick={handleEncrypt}
        >
          加密
        </Button>
        <Button
          variant="outlined"
          className={styles.btn}
          onClick={handleDecrypt}
        >
          解密
        </Button>
        <Button variant="outlined" className={styles.btn} onClick={handleClear}>
          清空
        </Button>
      </div>
      <TextField
        multiline
        rows={7}
        className={styles.input}
        value={outputVal}
        onChange={(e) => setOutputVal(e.target.value)}
      />
    </div>
  );
}
