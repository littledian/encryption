import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Base64Img = lazy(() => import('./pages/base64_img'));
const Encryption = lazy(() => import('./pages/encryption'));
const MD5 = lazy(() => import('./pages/md5'));

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path="/base64_img" element={<Base64Img />} />
        <Route path="/encryption" element={<Encryption />} />
        <Route path="/md5" element={<MD5 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
