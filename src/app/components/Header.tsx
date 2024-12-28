'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaEnvelope } from 'react-icons/fa';
import styles from '../page.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/img/next-js.png" alt="Next.js Logo" className={`${styles.logoImg} ${styles.logoImgNext}`}/>
                <img src="/img/react.png" alt="React.js Logo" className={`${styles.logoImg} ${styles.logoImgNext}`}/>
            </div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navItem}>
                    <FaHome className={styles.icon}/> Home
                </Link>
                <Link href="/about" className={styles.navItem}>
                    <FaInfoCircle className={styles.icon} /> About
                </Link>
                <Link href="/products" className={styles.navItem}>
                    <FaBox className={styles.icon} /> Products
                </Link>
                <Link href="/contact" className={styles.navItem}>
                    <FaEnvelope className={styles.icon} /> Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;