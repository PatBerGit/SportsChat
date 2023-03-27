import './header.css';
import { createGlobalStyle } from "styled-components";
import Menu from "../Menu/Menu";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #fdf2e9;
    font-family: 'Annie Use Your Telescope', cursive;
  }
`;

const Header = () => (
  
  <div className="header">
    <GlobalStyle />
    <Menu />
    <h1>Sports chat</h1>
    <div className ="userAccount">
      <svg fill="#FFC107" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clipRule="evenodd" fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
      </svg>
    </div>
  </div>
)
export default Header;