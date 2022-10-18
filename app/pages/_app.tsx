import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Theme'
import GlobalStyled from '../styles/Global'
import '../styles/Bootstrap.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default MyApp
