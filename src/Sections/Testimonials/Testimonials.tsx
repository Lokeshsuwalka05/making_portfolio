import React from 'react';
import styles from './Testimonials.module.css';
import sampleImage from '../../assets/Ellipse 148.svg';

interface Testimonial {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Derrick John',
    position: 'CTO at Bell Enterprises',
    description: 'NaC Program which include Consultation is designed to provide financial and climate roadmap for users in India. It is designed by RISO to resolve strategic positioning, energy services, and managing communications, timing, and location.',
    imageUrl: sampleImage
  },
  {
    name: 'Derrick John',
    position: 'CTO at Bell Enterprises',
    description: 'NaC Program which include Consultation is designed to provide financial and climate roadmap for users in India. It is designed by RISO to resolve strategic positioning, energy services, and managing communications, timing, and location.',
    imageUrl: sampleImage
  },
  {
    name: 'Derrick John',
    position: 'CTO at Bell Enterprises',
    description: 'NaC Program which include Consultation is designed to provide financial and climate roadmap for users in India. It is designed by RISO to resolve strategic positioning, energy services, and managing communications, timing, and location.',
    imageUrl: sampleImage
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className={styles.testimonialsSection}>
      <p className={styles.sectionTitle}>Testimonials</p>
      <div className={styles.testimonialsContainer}>
        {testimonialsData.map((testimonial, index) => (
          <div
          className={`${styles.testimonialCard} ${index === 0 ? styles.highlighted : ''}`}
          key={index}
          >
            {index%2===0&&( <img src={testimonial.imageUrl} alt={testimonial.name} className={styles.testimonialImage} />)}
          
           <h3 className={styles.testimonialName}>{testimonial.name}</h3>
           <p className={styles.testimonialPosition}>{testimonial.position}</p>
           <p className={styles.testimonialDescription}>{testimonial.description}</p>

        
         
            
           

          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
