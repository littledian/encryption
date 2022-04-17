import { useState } from 'react';
import { Button, Input, message, Typography } from 'antd';

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
      message.error(e.message);
    }
  };

  const handleDecrypt = async () => {
    try {
      const res = await http.post('/api/utils/decrypt', { data: inputVal });
      setOutputVal(res);
    } catch (e: any) {
      message.error(e.message);
    }
  };

  const handleClear = () => {
    setInputVal('');
    setOutputVal('');
  };

  return (
    <div className={styles.root}>
      <Title>工具 - 加解密</Title>
      <Typography.Title className={styles.title}>加解密</Typography.Title>
      <Input.TextArea
        className={styles.input}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div className={styles.actions}>
        <Button className={styles.btn} onClick={handleEncrypt}>
          加密
        </Button>
        <Button className={styles.btn} onClick={handleDecrypt}>
          解密
        </Button>
        <Button className={styles.btn} onClick={handleClear}>
          清空
        </Button>
      </div>
      <Input.TextArea
        className={styles.input}
        value={outputVal}
        onChange={(e) => setOutputVal(e.target.value)}
      />
    </div>
  );
}
