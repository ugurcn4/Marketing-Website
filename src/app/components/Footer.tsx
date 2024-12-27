'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import styles from '../page.module.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logo}>
                    <h1>Logo</h1>
                </div>
                <nav className={styles.footerNav}>
                    <Link href="/about" className={styles.footerLink}>About</Link>
                    <Link href="/products" className={styles.footerLink}>Products</Link>
                    <Link href="/contact" className={styles.footerLink}>Contact</Link>
                </nav>
                <button className={styles.scrollToTopButton} onClick={scrollToTop}>
                    <FaArrowUp className={styles.icon} />
                </button>
            </div>
            <p>&copy; 2024 Marketing Site. All rights reserved.</p>
        </footer>
    );
};

export default Footer;