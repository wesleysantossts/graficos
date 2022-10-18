import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background: ${props => props.theme.body.background.primary};
  }

  *:placeholder {
    font-family: 'Raleway', sans-serif;
  }
`
