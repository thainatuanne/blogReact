import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    body {
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.textColor};
        font-family: sans-serif;
        line-height: 140%;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Kumbh Sans", sans-serif;
    }
`
