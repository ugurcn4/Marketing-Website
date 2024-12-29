'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../app/Styles/contact.module.css';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const SignUp = () => {
    const router = useRouter(); 
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isSending, setIsSending] = useState(false);// Kayıt işlemi devam ederken butonun durumu kontrol edildi.
    const [responseMessage, setResponseMessage] = useState('');// Kayıt işlemi sonrası mesaj

    // Kayıt formu alanındaki değişiklikler takip edilddi.
    const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData((prev) => ({ ...prev, [name]: value }));
    };

    // Kayıt formunun gönderilmesi işlemi
    const handleSignupSubmit = async (e: React.FormEvent) => {
        e.preventDefault();// Formun sayfa yenilemesi engellendi.
        setIsSending(true);// Kayıt işlemi başladığında buton devre dışı bırakıldı.
        setResponseMessage('');
    
        // Şifre doğrulama
        if (signupData.password !== signupData.confirmPassword) {
            setResponseMessage('Şifreler eşleşmiyor.');
            setIsSending(false);// Kayıt işlemi durduruldu.
            return;
        }
    
        try {
            // API'ye POST isteği gönderilir
            const res = await fetch('./api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });
    
            const result = await res.json();
    
            if (res.ok) {
                setResponseMessage('Kayıt başarıyla oluşturuldu!');
                
                // Kayıt başarılı olduğunda giriş yapılmış olarak gösterildi.
                localStorage.setItem('isLoggedIn', 'true');
                
                // "Ürünler" sayfasına yönlendir
                router.push('/products'); 
            } else {
                setResponseMessage('Kayıt oluşturulamadı.');
            }
        } catch (error) {
            setResponseMessage('Bir hata oluştu.');
        } finally {
            setIsSending(false);//Buton tekrar aktif hale getirildi.
        }
    };
    

    return (
        <div className={styles.contactPage}>
            {/* Header */}
            <Header />
            <header className={styles.header}>
                <h1>Kayıt Ol</h1>
                <p>Hesabınızı oluşturmak için aşağıdaki formu doldurun.</p>
            </header>

            {/* Kayıt Formu Bölümü */}
            <section className={styles.contactFormSection}>
                <form className={styles.contactForm} onSubmit={handleSignupSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Kullanıcı Adı</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={signupData.username}
                            onChange={handleSignupChange}
                            required                       />
                    </div>{/*Doldurulması zorunlu alan olarak işaretlendi. */}  
                    <div className={styles.formGroup}>
                        <label htmlFor="email">E-posta Adresiniz</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Şifreyi Onayla</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton} disabled={isSending}>
                        {isSending ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
                    </button>
                    {responseMessage && <p>{responseMessage}</p>}
                </form>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SignUp;
