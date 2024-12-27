// components/Testimonials.tsx

import React from 'react';
import styles from '../Styles/testimonials.module.css'; // CSS dosyasını içe aktar

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Customers Think</h2>
    <div className={styles.testimonialCards}>
    <div className={styles.testimonialCard}>
    <img src="https://i.pravatar.cc/100?img=1" alt="Customer 1" className={styles.customerImg} />
    <div className={styles.testimonialContent}>
    <div className={styles.rating}>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    </div>
    <p className={styles.testimonialText}>
        "I am extremely satisfied with the services. The team was very professional and the results exceeded my expectations. Highly recommend!"
        </p>
        <h4 className={styles.customerName}>John Doe</h4>
    <p className={styles.customerRole}>CEO, ExampleCorp</p>
    </div>
    </div>

    <div className={styles.testimonialCard}>
    <img src="https://i.pravatar.cc/100?img=2" alt="Customer 2" className={styles.customerImg} />
    <div className={styles.testimonialContent}>
    <div className={styles.rating}>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    </div>
    <p className={styles.testimonialText}>
        "The product quality is top-notch! Customer service was always available to help and the delivery was quick. Very satisfied!"
        </p>
        <h4 className={styles.customerName}>Jane Smith</h4>
    <p className={styles.customerRole}>Founder, Shop4U</p>
    </div>
    </div>

    <div className={styles.testimonialCard}>
    <img src="https://i.pravatar.cc/100?img=3" alt="Customer 3" className={styles.customerImg} />
    <div className={styles.testimonialContent}>
    <div className={styles.rating}>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    </div>
    <p className={styles.testimonialText}>
        "I couldn't be happier with the results. The team was responsive, professional, and delivered exactly what I needed."
        </p>
        <h4 className={styles.customerName}>Emily Adams</h4>
    <p className={styles.customerRole}>Marketing Specialist</p>
    </div>
    </div>

    <div className={styles.testimonialCard}>
    <img src="https://i.pravatar.cc/100?img=4" alt="Customer 4" className={styles.customerImg} />
    <div className={styles.testimonialContent}>
    <div className={styles.rating}>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    <span className={styles.star}>⭐</span>
    </div>
    <p className={styles.testimonialText}>
        "The services were amazing. Everything was on time, and the results were exactly what we were looking for. Great experience!"
        </p>
        <h4 className={styles.customerName}>Michael Green</h4>
    <p className={styles.customerRole}>Sales Director, TechCompany</p>
    </div>
    </div>
    </div>
    </section>
);
};

export default Testimonials;
