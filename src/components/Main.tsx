import React from 'react';
import Header from '@components/molecular/header';
import Footer from './molecular/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './main.module.css'

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
