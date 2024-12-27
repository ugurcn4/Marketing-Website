// pages/about.tsx

'use client';

import React from 'react';
import styles from '../app/Styles/about.module.css';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Header */}
            <header className={styles.header}>
        <h1>About Us</h1>
    <p>Learn more about our journey, mission, and team.</p>
    </header>

    {/* Mission & Vision Section */}
    <section className={styles.missionVision}>
    <div className={styles.mission}>
        <h2>Our Mission</h2>
    <p>To deliver the best products and services that meet our customers' needs and exceed their expectations.</p>
    </div>
    <div className={styles.vision}>
        <h2>Our Vision</h2>
    <p>To become a global leader in our industry by continuously innovating and focusing on customer satisfaction.</p>
    </div>
    </section>

    {/* Team Section */}
    <section className={styles.teamSection}>
        <h2>Meet the Team</h2>
    <div className={styles.teamMembers}>
    <div className={styles.teamMember}>
    <img src="https://via.placeholder.com/150" alt="Team Member" className={styles.teamMemberImg} />
    <h3>John Doe</h3>
    <p>CEO & Founder</p>
    </div>
    <div className={styles.teamMember}>
    <img src="https://via.placeholder.com/150" alt="Team Member" className={styles.teamMemberImg} />
    <h3>Jane Smith</h3>
    <p>Chief Marketing Officer</p>
    </div>
    <div className={styles.teamMember}>
    <img src="https://via.placeholder.com/150" alt="Team Member" className={styles.teamMemberImg} />
    <h3>Michael Green</h3>
    <p>Lead Developer</p>
    </div>
    </div>
    </section>

    {/* Footer */}
    <footer className={styles.footer}>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
    </div>
);
};

export default About;
