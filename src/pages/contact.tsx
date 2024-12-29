'use client';

import React, {useState} from 'react';
import styles from '../app/Styles/contact.module.css';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { productData } from './productfeatures';//Ürün seçim kısmı için kullanılacak veri dizisi import edildi.

const Contact = () => {
    const [formData, setFormData] = useState({//Input değerleri tutuldu.
        name: '',
        email: '',
        product: '',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);//Buton durumu kontrol edildi.
    const [responseMessage, setResponseMessage] = useState('');//Form sonrası yanıt mesajı tutuldu.

    //Değişikliklerin kaydedilmesi için fonksiyon oluşturuldu.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    //Form gönderme fonksiyonu oluşturuldu.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setResponseMessage('');

        try {
            const res = await fetch('/api/contact', {//Fetch API'si kullanıldı.
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),//JSON formatında sunucuya gönderildi.
            });

            const result = await res.json();//Sunucudan yanıt alındı.

            //Alınan yanıta göre mesaj gönderildi.
            if (res.ok) {
                setResponseMessage('Message sent successfully!');
            } else {
                setResponseMessage('Failed to send message.');
            }
        } catch (error) {
            setResponseMessage('An error occurred.');
        } finally {
            setIsSending(false);
        }
    };
    
    return (
        <div className={styles.contactPage}>
            {/* Header */}
            <Header/>
            <header className={styles.header}>
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Please fill out the form below to get in touch.</p>
            </header>

            {/* Contact Form Section */}
            <section className={styles.contactFormSection}>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="product">Product</label>
                        <select
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                        >{/*Kullanıcıya istediği ürünü seçme imkanı tanındı. */}
                            <option value="" disabled>
                                Select a product
                            </option>
                            {productData.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton} disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                    {responseMessage && <p>{responseMessage}</p>}
                </form>
            </section>
            <br/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Contact;