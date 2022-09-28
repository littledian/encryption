import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Router from './Router';
import theme from './theme';
import styles from './App.module.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <div className={styles.root}>
          <main className={styles.main}>
            <Router />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
