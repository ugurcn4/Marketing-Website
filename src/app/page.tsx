'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import styles from './page.module.css';
import Testimonials from "@/app/components/Testimonials";
import About from "@/app/pages/About";

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>

            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={"https://picsum.photos/100/75"} alt="Logo" />
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navItem}>
                        <FaHome className={styles.icon} /> Home
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

            {/* Slider Section */}
            <section className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    <img src="https://picsum.photos/1200/700" alt="Slide 1" className={styles.slide} />
                    <img src="https://picsum.photos/1200/700" alt="Slide 2" className={styles.slide} />
                    <img src="https://picsum.photos/1200/700" alt="Slide 3" className={styles.slide} />
                </div>
            </section>

            {/* About Section */}
            <section className={styles.about}>
                <div className={styles.aboutCard}>
                    <h2 className={styles.aboutTitle}>About Us</h2>
                    <p className={styles.aboutText}>
                        Welcome to our marketing site! We are dedicated to providing the best products and services
                        to meet your needs. Explore our offerings and discover what makes us stand out.
                    </p>
                </div>
            </section>

            {/* Products Section */}
            <section className={styles.products}>
                <h2>Our Products</h2>
                <div className={styles.productGrid}>
                    <div className={styles.productCard}>
                        <img src="https://picsum.photos/150" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>High-quality product for your needs.</p>
                    </div>
                    <div className={styles.productCard}>
                        <img src="https://picsum.photos/150" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>Innovative and reliable solutions.</p>
                    </div>
                    <div className={styles.productCard}>
                        <img src="https://picsum.photos/150" alt="Product 3" />
                        <h3>Product 3</h3>
                        <p>Designed with care and precision.</p>
                    </div>
                </div>
            </section>

            <Testimonials /> {/* Testimonials bileşeni burada */}

            {/* Footer Section */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.logo}>
                        <h1>Logo</h1>
                    </div>
                    <nav className={styles.footerNav}>
                        <Link href="/src/app/pages" className={styles.footerLink}>About</Link>
                        <Link href="/products" className={styles.footerLink}>Products</Link>
                        <Link href="/contact" className={styles.footerLink}>Contact</Link>
                    </nav>
                    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
                        <FaArrowUp className={styles.icon} />
                    </button>
                </div>
                <p>&copy; 2024 Marketing Site. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
