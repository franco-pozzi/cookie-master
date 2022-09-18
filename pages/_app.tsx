import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ }>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
