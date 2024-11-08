import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSun, FaMoon, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchBar,
  SearchInput,
  ThemeToggle,
} from './styles/HeaderStyles';

const Header = ({ theme, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Logo>MyPortfolio</Logo>
      <Nav>
        <Link to="/home" component={NavItem}>
          <FaHome /> Home
        </Link>
        <Link to="/about" component={NavItem}>
          <FaUser /> About
        </Link>
        <Link to="/services" component={NavItem}>
          <FaBriefcase /> Services
        </Link>
        <Link to="/portfolio" component={NavItem}>
          <FaBriefcase /> Portfolio
        </Link>
        <Link to="/contact" component={NavItem}>
          <FaEnvelope /> Contact
        </Link>
      </Nav>
      <SearchBar>
        <SearchInput type="text" placeholder="Search..." />
        <FaSearch />
      </SearchBar>
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'light' ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </HeaderWrapper>
  );
};

export default Header;
