'use client';

import React from 'react';
import styles from './page.module.css';
import Testimonials from "@/app/components/Testimonials";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {/* Header Section */}
            <Header/>

            {/* Slider Section */}
            <section className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    <img src="https://picsum.photos/1200/700" alt="Ürün 1" className={styles.slide}/>
                    <img src="https://picsum.photos/1200/700" alt="Ürün 2" className={styles.slide}/>
                    <img src="https://picsum.photos/1200/700" alt="Ürün 3" className={styles.slide}/>
                </div>
            </section>

            {/* About Section */}
            <section className={styles.about}>
                <div className={styles.aboutCard}>
                    <h2 className={styles.aboutTitle}>Hakkımızda</h2>
                    <p className={styles.aboutText}>
                        En iyi ekran kartlarını sunmak için buradayız! Ürünlerimiz, oyun ve profesyonel performansı
                        bir üst seviyeye taşımak için tasarlanmıştır. Kalite, yenilikçilik ve müşteri memnuniyetini
                        önceliğimiz haline getiriyoruz.
                    </p>
                </div>
            </section>

            {/* Products Section */}
            <section className={styles.products}>
                <h2>Ürünlerimiz</h2>
                <div className={styles.productGrid}>
                    <div className={styles.productCard}>
                        <img src="https://picsum.photos/150" alt="Ekran Kartı 1"/>
                        <h3>RTX Ultra</h3>
                        <p>Yüksek çözünürlükte oyun ve grafik tasarım için ideal ekran kartı.</p>
                    </div>
                    <div className={styles.productCard}>
                        <img src="https://picsum.photos/150" alt="Ekran Kartı 2"/>
                        <h3>GTX Pro</h3>
                        <p>Performans ve verimlilik arayan profesyoneller için.</p>
                    </div>
                    <div className={styles.productCard}>
                        <img src="https://picsum.photos/150" alt="Ekran Kartı 3"/>
                        <h3>Vega Master</h3>
                        <p>Yüksek hız ve dayanıklılığı bir arada sunar.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonials}>
                <Testimonials/>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
    );
};

export default Home;
