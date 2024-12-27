'use client';

import React from 'react';
import styles from '../app/Styles/contact.module.css';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            {/* Header */}
            <header className={styles.header}>
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Please fill out the form below to get in touch.</p>
            </header>

            {/* Contact Form Section */}
            <section className={styles.contactFormSection}>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </section>
            <br/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Contact;