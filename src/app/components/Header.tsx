'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import styles from '../page.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <img
                        src="/img/next-js.png"
                        alt="Next.js Logo"
                        className={`${styles.logoImg} ${styles.logoNext}`}
                    />
                    <img
                        src="/img/react.png"
                        alt="React.js Logo"
                        className={`${styles.logoImg} ${styles.logoReact}`}
                    />
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navItem}>
                        <FaHome className={styles.icon} />
                        <span className={styles.navText}>Home</span>
                    </Link>
                    <Link href="/about" className={styles.navItem}>
                        <FaInfoCircle className={styles.icon} />
                        <span className={styles.navText}>About</span>
                    </Link>
                    <Link href="/products" className={styles.navItem}>
                        <FaBox className={styles.icon} />
                        <span className={styles.navText}>Products</span>
                    </Link>
                    <Link href="/signup" className={styles.navItem}> {/* Signup bağlantısı buraya eklendi */}
                        <FaUserPlus className={styles.icon} />
                        <span className={styles.navText}>Signup</span>
                    </Link>
                    <Link href="/contact" className={styles.navItem}>
                        <FaEnvelope className={styles.icon} />
                        <span className={styles.navText}>Contact</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
