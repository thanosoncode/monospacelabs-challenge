import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *,*::after, *::before{
    box-sizing:border-box;
    padding:0;
    margin:0;

  }

  body {
    font-family: 'Montserrat', sans-serif;
    color:${({ theme }) => theme.color};
    background:${({ theme }) => theme.bg}; 
  }

`;
