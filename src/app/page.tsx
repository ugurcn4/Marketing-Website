'use client';

import React, {useState, useEffect} from 'react';
import styles from './page.module.css';
import Testimonials from "@/app/components/Testimonials";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Slider from "@/app/components/Slider";
import { productData } from '@/pages/productfeatures';
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Bileşen mount olduktan sonra mounted'i true yapıyoruz
    }, []);

    const handleProductClick = (id:number) => {
        const url = `/productfeatures?id=${id}`;
        console.log(`Navigating to /productfeatures?id=${id}`);
        router.push(url); 
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!mounted) {
        return null; // Bileşen istemci tarafında render edilene kadar hiçbir şey render etmiyoruz
    }

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
