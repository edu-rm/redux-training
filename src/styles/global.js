import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style-type: none;
    border: none;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }
  body, html{
    height: 100%;
    background: #00008B;
  }

  button{
    cursor: pointer;
  }

`;
