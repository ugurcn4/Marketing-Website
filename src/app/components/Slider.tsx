import React, { useState } from 'react';
import styles from './../Styles/Slider.module.css';

const Slider = () => {//Gösterilen slaytın indeksi tutuldu.
    const [currentIndex, setCurrentIndex] = useState(0);

    
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

    //Slayt geçişleri düzenlendi.
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>//Eğer şu anki slayt ilk slaytsa, son slayta geçiş yapılır.
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1//Değilse, önceki slayta gidilir.

        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>//Eğer şu anki slayt son slaytsa, ilk slayta dönülür.
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1 //Değilse, bir sonraki slayta gidilir.
        );
    };

    return (
        <section className={styles.slider}>
            {/*Aktif slaytı göstermek için kaydırma işlemi yapıldı. */}
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
            {/*Butonlara slayt geçiş özell,kleri eklendi */}
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
