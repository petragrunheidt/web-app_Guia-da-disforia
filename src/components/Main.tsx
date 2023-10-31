import React from 'react';
import Header from '@components/molecular/header';
import Footer from './molecular/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@theme/theme';
import CssBaseline from '@mui/material/CssBaseline';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
