'use client';

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaEnvelope, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import styles from '../page.module.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);

        
        router.push('/signup');
    };
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
                    {isLoggedIn && (
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            <FaSignOutAlt className={styles.icon} />
                            <span className={styles.navText}>Logout</span>
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
