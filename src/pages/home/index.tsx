import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import Title from '@/components/Title';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <Title>工具</Title>
      <div className={styles.cell}>
        <Link to="/encryption" className="ant-typography">
          加解密
        </Link>
      </div>
      <div className={styles.cell}>
        <Link to="/md5" className="ant-typography">
          MD5
        </Link>
      </div>
      <div className={styles.cell}>
        <Link to="/base64_img" className="ant-typography">
          Base64图片转换
        </Link>
      </div>
    </div>
  );
}
