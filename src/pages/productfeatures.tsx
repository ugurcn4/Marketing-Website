'use client';

import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../app/Styles/productfeatures.module.css';
import Header from "@/app/components/Header";

export const productData = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a high-quality product designed to meet your needs.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        image: "https://via.placeholder.com/300",
    },
    {
        id: 2,
        name: "Product 2",
        description: "Innovative and reliable solutions.",
        features: ["Feature A", "Feature B", "Feature C"],
        image: "https://via.placeholder.com/300",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Designed with care and precision.",
        features: ["Feature A", "Feature B", "Feature C"],
        image: "https://via.placeholder.com/300",
    },
    
];

const ProductFeatures = () => {
    const router = useRouter();
    const { id } = router.query; // URL'den ürün ID'sini alır


    useEffect(() => {
        console.log(id);  // ID parametresinin doğru şekilde geldiğini kontrol edin
    }, [id]);
    const product = productData.find((item) => item.id === parseInt(id as string));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className={styles.productFeaturesPage}>
            <Header />
            <header className={styles.header}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </header>

            <section className={styles.featuresSection}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <h2>Features</h2>
                <ul>
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>

        </div>
    );
};

export default ProductFeatures;
