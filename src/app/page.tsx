'use client';

import React from 'react';
import styles from './page.module.css';
import Testimonials from "@/app/components/Testimonials";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Home = () => {
    //
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>

            {/* Header Section */}
            <Header />
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
            <Footer />
        </div>
    );
};

export default Home;
