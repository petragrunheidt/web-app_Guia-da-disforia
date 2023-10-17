import React from 'react';
import Link from 'next/link'
import styles from './index.module.css'

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.title} href="/">
        O guia da disforia de gênero
      </Link>
    </div>
  )
}

export default Header;
