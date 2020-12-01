import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 1em;
    box-sizing: border-box;
    --bg-color: #E9E9E9;
    --text-color: #555555;
    --text-color-light: rgba(85, 85, 85, 0.5);
    
    /* Большие девайсы (большие десктопы, < 1200px) */
    @media (max-width: 1199.98px) { 
      font-size: .9em;
   }
    /* Средние девайсы («таблетки», < 992px)  */
    @media (max-width: 991.98px) { 
      font-size: .7em;
    }
    /* Малые девайсы («ландшафтные», < 768px) */
    @media (max-width: 767.98px) { 
      font-size: .45em;
    }
    /* Экстрамалые девайсы («телефоны», < 576px) */
    @media (max-width: 575.98px) { 
      font-size: .9em;
    }
    /* @media(max-width: 1140px) {
      font-size: 0.9em;
    }
    @media(max-width: 960px) {
      font-size: 0.8em;
    }
    @media(max-width: 720px) {
      font-size: 0.8em;
    }
    @media(max-width: 425px) {
      font-size: 0.8em;
    } */
  }
	body {
    font-family: "Roboto", sans-serif;
    color: var(--text-color);
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
	a {
		text-decoration: none;
		color: black;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
  
	*,
  ::before,
  ::after {
		box-sizing: inherit;
  }
  input, textarea {
    border: none;
    outline: none;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
