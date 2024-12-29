import { useRouter } from 'next/router';
import styles from '../app/Styles/products.module.css';
import { productData } from './productfeatures';
import Header from "@/app/components/Header";

const Products = () => {
    const router = useRouter();

    //Ürün kartına tıklandığında, ürünün detay sayfasına yönlendiren fonksiyon oluşturuldu.
    const handleProductClick = (id:number) => {
        const url = `/productfeatures?id=${id}`;// Ürün detay sayfasının URL'si oluşturuldu.
        console.log(`Navigating to /productfeatures?id=${id}`);
        router.push(url); //Sayfaya yönlendirildi.
    };

    return (
        <div className={styles.productsPage}>
            {/* Header */}
            <Header/>
            <header className={styles.header}>
                <h1>Ürünlerimiz</h1>
                <p>İhtiyaçlarınızı karşılamak üzere tasarlanmış yüksek kaliteli ürün yelpazemizi keşfedin.</p>
            </header>
            <div className={styles.productsSection}>
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
            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Products;
