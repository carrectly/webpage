import React, { FC } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from '../../../styles/Layout.module.css';

type children = JSX.Element;

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hello</h1>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
