import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from '@mui/icons-material';
import StyledNavBar from './StyledAppBar';

const Header = () => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services"><ShoppingCart/></Link>
        </li>
      </ul>
      </StyledNavBar>
  );
};

export default Header;
