import styled from '@emotion/styled';
import { AppBar, AppBarProps } from '@mui/material';
import { FC } from 'react';

const StyledNav = styled(AppBar)<AppBarProps>`
  height: 50px;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  & ul li a {
    color: '#ffffff',
    marginLeft: 10,
  },
`;

const StyledNavBar: FC = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

export default StyledNavBar;
