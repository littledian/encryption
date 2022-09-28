import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <main className={styles.main}>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
