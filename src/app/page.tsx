'use client';

import React from 'react';
import styles from './page.module.css';
import Testimonials from "@/app/components/Testimonials";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { productData } from '@/pages/productfeatures';
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();
    const handleProductClick = (id:number) => {
        const url = `/productfeatures?id=${id}`;
        console.log(`Navigating to /productfeatures?id=${id}`);
        router.push(url); 
    };

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
                        {productData.map((product) => (
                            <div
                                key={product.id}
                                className={styles.productCard}
                                onClick={() => handleProductClick(product.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        ))}
                </div>
            </section>

            <Testimonials /> {/* Testimonials bileşeni burada */}

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;
