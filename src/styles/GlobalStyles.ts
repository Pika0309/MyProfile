import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: 'Be Vietnam Pro',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
}

ul{
    list-style: none;
}

section{
    padding: 100px 0px;
}

section:nth-of-type(odd){
    background-color: #F7F6FB;
}
section:nth-of-type(even){
    background-color: #F7F6FB;
}

section:nth-of-type(3n){
    background-color: ${Theme.colors.bcgGroundSection};
}
`