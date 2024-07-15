import React, { useState } from 'react';
import styles from './Form.module.css';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        linkedin: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>LETS GET IN TOUCH !</h1>
            <p className={styles.subtitle}>I WOULD LOVE TO HEAR FROM YOU.</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="linkedin" className={styles.label}>Linkedin Profile</label>
                        <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            placeholder="Linkedin Profile"
                            value={formData.linkedin}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type here..."
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                    />
                </div>
                <button type="submit" className={styles.button}>Send</button>
            </form>
            <p className={styles.thankYouMessage}>Thank you for contacting. We will contact soon</p>
        </div>
    );
};

export default Form;
