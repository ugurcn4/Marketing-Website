// components/Testimonials.tsx

import React from 'react';
import styles from '../Styles/testimonials.module.css';

const Testimonials = () => {
    // Testimonial verileri
    const testimonials = [
        {
            img: "https://i.pravatar.cc/100?img=7",
            text: "Verilen hizmetlerden son derece memnunum. Ekip çok profesyoneldi ve sonuçlar beklentilerimi fazlasıyla aştı. Şiddetle tavsiye ederim!",
            name: "Ahmet Y.",
            role: "Genel Müdür",
            stars: 5,
        },
        {
            img: "https://i.pravatar.cc/100?img=23",
            text: "Ürün kalitesi mükemmel! Müşteri hizmetleri her zaman yanımdaydı ve teslimat hızlıydı. Çok memnun kaldım.",
            name: "Ayşe D.",
            role: "Kurucu, Alışveriş Dünyası",
            stars: 4,
        },
        {
            img: "https://i.pravatar.cc/100?img=20",
            text: "Sonuçlardan daha mutlu olamazdım. Ekip hızlı, profesyonel ve tam olarak ihtiyacım olanı teslim etti.",
            name: "Elif K.",
            role: "Pazarlama Uzmanı",
            stars: 4,
        },
        {
            img: "https://i.pravatar.cc/100?img=12",
            text: "Hizmetler harikaydı. Her şey zamanında teslim edildi ve tam olarak aradığımız sonuçları aldık. Harika bir deneyim!",
            name: "Mehmet Ç.",
            role: "Satış Direktörü, Teknoloji Şirketi",
            stars: 3,
        },
    ];

    return (
        <section className={styles.testimonials}>
            <div className={styles.testimonialsContainer}>
                <h2 className={styles.sectionTitle}>Müşterilerimiz Ne Diyor?</h2>
                <p className={styles.sectionSubtitle}>
                    Değerli müşterilerimizin yorumları, bizim için ilham kaynağı.
                </p>
                <div className={styles.testimonialGrid}>
                    {testimonials.map(({ img, text, name, role, stars }, index) => (
                        <div className={styles.testimonialCard} key={index}>
                            <img src={img} alt={name} className={styles.customerImg} />
                            <div className={styles.testimonialContent}>
                                <div className={styles.rating}>
                                    {Array.from({ length: stars }, (_, i) => (
                                        <span className={styles.star} key={i}>⭐</span>
                                    ))}
                                </div>
                                <p className={styles.testimonialText}>{text}</p>
                                <h4 className={styles.customerName}>{name}</h4>
                                <p className={styles.customerRole}>{role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
