import { createGlobalStyle } from 'styled-components'

export const Colors = {
  primaBgColor: '#05161A',
  secondBgColor: '#072E33',
  fontColor: '#fff',
  primaryBlueColor: '#489dc7'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Share Tech Mono', monospace;
    list-style: none;
  }

  body {
    background-color: ${Colors.primaBgColor};
    color: ${Colors.fontColor};
  }

  .container {
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
  }
`
