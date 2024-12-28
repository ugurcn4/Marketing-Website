'use client';

import React from 'react';
import styles from './page.module.css';
import Testimonials from "@/app/components/Testimonials";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Slider from "@/app/components/Slider";

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {/* Header Section */}
            <Header/>

            <Slider/>

            {/* About Section */}
            <section className={styles.about}>
                <div className={styles.aboutContainer}>
                    {/* Görsel Alanı */}
                    <div className={styles.imageWrapper}>
                        <img src="/img/rtx-ultra.jpg" alt="Hakkımızda Görseli" className={styles.aboutImage} />
                    </div>
                    {/* Metin Alanı */}
                    <div className={styles.textWrapper}>
                        <h2 className={styles.aboutTitle}>Hakkımızda</h2>
                        <p className={styles.aboutText}>
                            En iyi ekran kartlarını sunmak için buradayız! Ürünlerimiz, oyun ve profesyonel performansı
                            bir üst seviyeye taşımak için tasarlanmıştır. Kalite, yenilikçilik ve müşteri memnuniyetini
                            önceliğimiz haline getiriyoruz.
                        </p>
                    </div>
                </div>
            </section>


            {/* Products Section */}
            <section className={styles.products}>
                <div className={styles.productsContainer}>
                    <h2 className={styles.productsTitle}>Ürünlerimiz</h2>
                    <p className={styles.productsSubtitle}>
                        Yüksek performans ve kaliteye odaklanmış ürünlerimizi keşfedin.
                    </p>
                    <div className={styles.productGrid}>
                        <div className={styles.productCard}>
                            <img src="/img/rtx-ultra.jpg" alt="Ekran Kartı 1" className={styles.productImage} />
                            <h3 className={styles.productName}>RTX Ultra</h3>
                            <p className={styles.productDescription}>
                                Yüksek çözünürlükte oyun ve grafik tasarım için ideal ekran kartı.
                            </p>
                        </div>
                        <div className={styles.productCard}>
                            <img src="/img/gtx-pro.jpg" alt="Ekran Kartı 2" className={styles.productImage} />
                            <h3 className={styles.productName}>GTX Pro</h3>
                            <p className={styles.productDescription}>
                                Performans ve verimlilik arayan profesyoneller için.
                            </p>
                        </div>
                        <div className={styles.productCard}>
                            <img src="/img/vega-master.jpg" alt="Ekran Kartı 3" className={styles.productImage} />
                            <h3 className={styles.productName}>Vega Master</h3>
                            <p className={styles.productDescription}>
                                Yüksek hız ve dayanıklılığı bir arada sunar.
                            </p>
                        </div>
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
