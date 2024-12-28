// components/Testimonials.tsx

import React from 'react';
import styles from '../Styles/testimonials.module.css'; // CSS dosyasını içe aktar

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.sectionTitle}>Müşterilerimiz Ne Diyor?</h2>
            <div className={styles.testimonialCards}>
                <div className={styles.testimonialCard}>
                    <img
                        src="https://i.pravatar.cc/100?img=1"
                        alt="Müşteri 1"
                        className={styles.customerImg}
                    />
                    <div className={styles.testimonialContent}>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                        </div>
                        <p className={styles.testimonialText}>
                            "Verilen hizmetlerden son derece memnunum. Ekip çok profesyoneldi ve sonuçlar beklentilerimi fazlasıyla aştı. Şiddetle tavsiye ederim!"
                        </p>
                        <h4 className={styles.customerName}>Ahmet Yılmaz</h4>
                        <p className={styles.customerRole}>Genel Müdür</p>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <img
                        src="https://i.pravatar.cc/100?img=2"
                        alt="Müşteri 2"
                        className={styles.customerImg}
                    />
                    <div className={styles.testimonialContent}>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                        </div>
                        <p className={styles.testimonialText}>
                            "Ürün kalitesi mükemmel! Müşteri hizmetleri her zaman yanımdaydı ve teslimat hızlıydı. Çok memnun kaldım."
                        </p>
                        <h4 className={styles.customerName}>Ayşe Demir</h4>
                        <p className={styles.customerRole}>Kurucu, Alışveriş Dünyası</p>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <img
                        src="https://i.pravatar.cc/100?img=3"
                        alt="Müşteri 3"
                        className={styles.customerImg}
                    />
                    <div className={styles.testimonialContent}>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                        </div>
                        <p className={styles.testimonialText}>
                            "Sonuçlardan daha mutlu olamazdım. Ekip hızlı, profesyonel ve tam olarak ihtiyacım olanı teslim etti."
                        </p>
                        <h4 className={styles.customerName}>Elif Kaya</h4>
                        <p className={styles.customerRole}>Pazarlama Uzmanı</p>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <img
                        src="https://i.pravatar.cc/100?img=4"
                        alt="Müşteri 4"
                        className={styles.customerImg}
                    />
                    <div className={styles.testimonialContent}>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.star}>⭐</span>
                        </div>
                        <p className={styles.testimonialText}>
                            "Hizmetler harikaydı. Her şey zamanında teslim edildi ve tam olarak aradığımız sonuçları aldık. Harika bir deneyim!"
                        </p>
                        <h4 className={styles.customerName}>Mehmet Çelik</h4>
                        <p className={styles.customerRole}>Satış Direktörü, Teknoloji Şirketi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
