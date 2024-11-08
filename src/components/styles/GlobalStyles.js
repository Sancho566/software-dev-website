import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    margin-bottom: 10px;
  }

  main {
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px 0;
  }

  header {
    background-color: #333;
    padding: 15px 0;
  }

  header ul {
    gap: 30px;
  }

  header li a {
    color: #fff;
    font-size: 1.2rem;
  }

  header li a:hover {
    color: #f4f4f9;
  }

  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
  }

  footer ul {
    gap: 20px;
  }

  footer li {
    display: inline;
    padding: 0 15px;
  }

  footer li a {
    color: white;
  }

  footer li a:hover {
    color: #f4f4f9;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }

  .project-card {
    background: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }
`;

export default GlobalStyles;
