import React from 'react';
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
    <p className="title">Sports chat</p>
  </div>
)
export default Header;