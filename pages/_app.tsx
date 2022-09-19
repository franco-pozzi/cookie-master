import type { AppContext, AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme } from '../themes';
import { lightTheme } from '../themes/light-theme';
import { customTheme } from '../themes/custom-theme';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme }: Props) {

  console.log(theme)

  const currentTheme = theme === 'light'
    ? lightTheme
    : theme === 'dark'
      ? darkTheme
      : customTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}


MyApp.getInitialProps = async (appContext: AppContext) => {

  const validThemes = ['light', 'dark', 'custom']

  const { theme } = appContext.ctx.req ? (appContext.ctx.req.cookies) : { theme: 'light' }

  return {
    theme: validThemes.includes(theme) ? theme : 'dark'
  }

}

export default MyApp
