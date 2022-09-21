import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'

    const userTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
        ? darkTheme
        : customTheme

    setCurrentTheme(userTheme)
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp