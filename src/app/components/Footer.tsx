'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import styles from '../page.module.css';

const Footer = () => {
    const scrollToTop = () => {//Sayfa kaydırıldığında sayfanın en üstüne dönebilmek için bir işlev eklendi.
        window.scrollTo({ top: 0, behavior: 'smooth' });//Yumuşak bir şekilde sayfanın en üstüne gönderme sağlandı.
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <div className={styles.logo}>
                        <img src="/img/next-js.png" alt="Next.js Logo"
                             className={`${styles.logoImg} ${styles.logoImgNext}`} />
                        <img src="/img/react.png" alt="React.js Logo"
                             className={`${styles.logoImg} ${styles.logoImgNext}`} />
                    </div>
                    <p className={styles.footerDescription}>
                        Powered by Next.js & React.js
                    </p>
                </div>
                <nav className={styles.footerNav}>{/*Gezinti bağlantıları gruplandırıldı. */}
                    <Link href="/about" className={styles.footerLink}>About</Link>
                    <Link href="/products" className={styles.footerLink}>Products</Link>
                    <Link href="/contact" className={styles.footerLink}>Contact</Link>
                </nav>
                <button className={styles.scrollToTopButton} onClick={scrollToTop}>
                    <FaArrowUp className={styles.icon} />
                </button>
            </div>
            <p className={styles.footerCopy}>&copy; 2024 Marketing Site. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
