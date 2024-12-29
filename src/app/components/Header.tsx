'use client';

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaEnvelope, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import styles from '../page.module.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);//Kullanıcının giriş yapıp yapmadığı izlendi.
    const router = useRouter();

    useEffect(() => {//Bileşen yüklendiğinde kullanıcı girişi kontrol edildi.
        const loggedIn = localStorage.getItem('isLoggedIn');//Tarayıcı depolamasındaki anahtar okundu.
        if (loggedIn) {//Okunan anahtara göre değer değiştirldi.
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');//Giriş durumu tarayıcıdan kaldırıldı.
        setIsLoggedIn(false);

        
        router.push('/signup');//Yönlendirme yapıldı.
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
                            <FaSignOutAlt className={styles.icon} />{/*Kullanıcının giriş durumuna göre Çıkış düğmesi gösterildi. */}
                            <span className={styles.navText}>Logout</span>
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
