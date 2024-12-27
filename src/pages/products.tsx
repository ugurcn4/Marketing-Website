// pages/products.tsx

'use client';

import React from 'react';
import styles from '../app/Styles/products.module.css';

const Products = () => {
    return (
        <div className={styles.productsPage}>
            {/* Header */}
            <header className={styles.header}>
                <h1>Our Products</h1>
                <p>Discover our range of high-quality products designed to meet your needs.</p>
            </header>

            {/* Products Section */}
            <section className={styles.productsSection}>
                <div className={styles.productCard}>
                    <img src="https://via.placeholder.com/150" alt="Product 1" className={styles.productImg} />
                    <h3>Product 1</h3>
                    <p>High-quality product for your needs.</p>
                </div>
                <div className={styles.productCard}>
                    <img src="https://via.placeholder.com/150" alt="Product 2" className={styles.productImg} />
                    <h3>Product 2</h3>
                    <p>Innovative and reliable solutions.</p>
                </div>
                <div className={styles.productCard}>
                    <img src="https://via.placeholder.com/150" alt="Product 3" className={styles.productImg} />
                    <h3>Product 3</h3>
                    <p>Designed with care and precision.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Products;