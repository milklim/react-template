import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
     box-sizing: border-box;
  }
  
   *,
   *::before,
   *::after {
     box-sizing: inherit;
  }
`;

export default GlobalStyles;
