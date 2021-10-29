import React from 'react';
import Link from 'next/link';
import navStyles from './Header.module.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Text</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
