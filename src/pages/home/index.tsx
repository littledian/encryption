import { Link } from '@mui/material';
import Title from '@/components/Title';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <Title>工具</Title>
      <div className={styles.cell}>
        <Link href="/encryption">加解密</Link>
      </div>
      <div className={styles.cell}>
        <Link href="/md5">MD5</Link>
      </div>
      <div className={styles.cell}>
        <Link href="/base64_img">Base64图片转换</Link>
      </div>
    </div>
  );
}
