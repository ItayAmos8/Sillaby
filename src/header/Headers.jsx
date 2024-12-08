import React from 'react';
import styles from './Header.module.css';
import { LogoGroup } from './LogoGroup';
import { UserSection } from './UserSection';
import { HeaderLinks } from './HeaderLinks';
export const Headers = () => {
  return (
      <header className={styles.headerContainer} role="banner">
        <LogoGroup />
        <HeaderLinks/>
        <UserSection />
      </header>
  );
};
export default Headers;

