import React, { useState } from 'react';
import styles from './../Styles/Slider.module.css';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slider içeriği: Görseller ve metinler
    const slides = [
        {
            src: "/img/slider1.jpg",
            title: "Yüksek Performans",
            description: "En iyi ekran kartları ile üstün performans deneyimi.",
        },
        {
            src: "/img/NVIDIA-GeForce-RTX-4090-Triple-Fan.jpg",
            title: "NVIDIA RTX 4090",
            description: "Yeni nesil grafik kartıyla oyun ve tasarımın sınırlarını zorlayın.",
        },
        {
            src: "/img/SupremeRAID-SR-1010-NVMe-Raid-PCIe-4.0-Card-low_res-scale-4_00x-1920x1080.png",
            title: "SupremeRAID SR-1010",
            description: "Yüksek hızlı RAID kartı ile veri işleme hızınızı artırın.",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className={styles.slider}>
            <div
                className={styles.sliderWrapper}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slideContainer}>
                        <img src={slide.src} alt={`Slide ${index + 1}`} className={styles.slide} />
                        <div className={styles.textOverlay}>
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={`${styles.sliderButton} ${styles.left}`} onClick={handlePrev}>
                &lt;
            </button>
            <button className={`${styles.sliderButton} ${styles.right}`} onClick={handleNext}>
                &gt;
            </button>
        </section>
    );
};

export default Slider;
