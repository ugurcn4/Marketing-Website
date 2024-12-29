'use client';

import React, {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import styles from '../app/Styles/productfeatures.module.css';
import Header from "@/app/components/Header";

//Ürün verilerini tutan sabit tbir dizi oluşturuldu.
export const productData = [
    {
        id: 1,
        name: "RTX Ultra",
        description: "Bu, ihtiyaçlarınızı karşılamak için tasarlanmış yüksek kaliteli bir üründür.",
        features: ["Bellek (RAM): 12 GB GDDR6",
            "Soğutma Teknolojisi: Dual Fan, Hızlı Isı Dağılımı",
            "Bağlantı Türü: HDMI 2.1, DisplayPort 1.4a"],
        image: "./img/rtx-ultra.jpg",
    },
    {
        id: 2,
        name: "GTX Pro",
        description: "Innovative and reliable solutions.",
        features: ["Bellek (RAM): 16 GB HBM2",
            "Çekirdek Sayısı: 3584",
            "Desteklenen VR Teknolojisi: Oculus Rift, HTC Vive"],
        image: "./img/gtx-pro.jpg",
    },
    {
        id: 3,
        name: "Vega Master",
        description: "Designed with care and precision.",
        features: ["Bellek (RAM): 8 GB GDDR5",
            "Çekirdek Frekansı: 1750 MHz",
            "Desteklenen Oyun Çözünürlükleri: 4K, 1440p"],
        image: "./img/vega-master.jpg",
    },
    
];

const ProductFeatures = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();
    const { id } = router.query; // URL'den ürün ID'si alındı.

    //Kullanıcı giriş durumu kontrol edildi.
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (!loggedIn) {
          alert("Ürün özelliklerini görebilmek için giriş yapınız");
          router.push('/signup');//Giriş durumuna göre sayfa yönlendirilmesi yapıldı.
        } else {
          setIsLoggedIn(true); //Giriş durumu düzenlendi.
        }
      }, [router]);

    useEffect(() => {
        console.log(id); 
    }, [id]);
    //Ürün verileri ID'sine göre filtrelendi.
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
                <h2>Özellikler</h2>
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
