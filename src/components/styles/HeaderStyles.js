import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.headerBg || '#333'};
  color: ${({ theme }) => theme.textColor || '#fff'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.logoColor || '#fff'};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.navTextColor || '#fff'};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: orange;
  }

  svg {
    font-size: 1rem;
    margin-right: 0.2rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.searchBg || '#555'};
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  
  svg {
    color: ${({ theme }) => theme.iconColor || '#fff'};
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.textColor || '#fff'};
  padding: 0.3rem;
  margin-right: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor || '#ccc'};
  }
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.iconColor || '#fff'};
  transition: color 0.3s ease;

  &:hover {
    color: orange;
  }
`;
