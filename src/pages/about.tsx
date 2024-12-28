'use client';

import React from 'react';
import styles from './../app/Styles/contact.module.css';
import Header from "@/app/components/Header";

const About = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Header */}
            <Header/>
            <header className={styles.header}>
                <h1 className={styles.pageTitle}>Hakkımızda</h1>
                <p className={styles.pageDescription}>
                    Yolculuğumuz, misyonumuz ve ekibimiz hakkında daha fazla bilgi edinin.
                </p>
            </header>

            {/* Mission & Vision Section */}
            <section className={styles.missionVision}>
                <div className={styles.mission}>
                    <h2 className={styles.sectionTitle}>Misyonumuz</h2>
                    <p className={styles.sectionText}>
                        Bu ders, Next.js ve React.js kullanarak bir web uygulaması oluşturmayı öğretmek için tasarlanmıştır.
                        İleri İnternet Programlama dersi kapsamında hazırlanmıştır.
                        Misyonumuz, bu dersin finalinden başarılı bir şekilde geçmek ve yüksek not almaktır.
                    </p>
                </div>
                <div className={styles.vision}>
                    <h2 className={styles.sectionTitle}>Vizyonumuz</h2>
                    <p className={styles.sectionText}>
                        Gelecekte başarılı birer yazılımcı olmak ve bu alanda kariyer yapmak için çalışmalarımızı sürdürüyoruz.
                        Yenilikçi fikirlerimiz ve projelerimizle sektöre yön vermek istiyoruz.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.sectionTitle}>Takımımız</h2>
                <div className={styles.teamMembers}>
                    <div className={styles.teamMember}>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className={styles.teamMemberImg}
                        />
                        <h3 className={styles.teamMemberName}>Yasin FİDAN</h3>
                        <p className={styles.teamMemberRole}>Computer Engineer</p>
                    </div>
                    <div className={styles.teamMember}>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className={styles.teamMemberImg}
                        />
                        <h3 className={styles.teamMemberName}>Uğur Can UÇAR</h3>
                        <p className={styles.teamMemberRole}>Computer Engineer</p>
                    </div>
                    <div className={styles.teamMember}>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className={styles.teamMemberImg}
                        />
                        <h3 className={styles.teamMemberName}>Betül AKDOĞAN</h3>
                        <p className={styles.teamMemberRole}>Computer Engineer</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 BUY STORE. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;
