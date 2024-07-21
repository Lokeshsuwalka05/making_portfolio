import React from 'react';
import styles from './Testimonials.module.css';
import sampleImage from '../../assets/Ellipse 148.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const testimonialsData = [
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
  }

  
];

const Testimonials: React.FC = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.06,
    swipeToSlide: true,
    afterChange: function(index:number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive:[
      {
      breakpoint:1024,
      settings:{
        slidesToShow:2.1,
        centerPadding:"40px",
      }
    },{
      breakpoint:600,
      settings:{
        slidesToShow:1.08,
        centerPadding:"20px",
      }
    },
    {
      breakpoint:443,
      settings:{
        slidesToShow:1,
        centerPadding:"20px",
      }
    }
    ]
  };

  return (
    <div className={styles.testimonialsSection}>
      <p className={styles.sectionTitle}>Testimonials</p>
      <div className={styles.testimonialsContainer}>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div
              className={styles.testimonialCard}
          
            >
              <img src={testimonial.imageUrl} alt={testimonial.name} className={styles.testimonialImage} />
              <h3 className={styles.testimonialName}>{testimonial.name}</h3>
              <p className={styles.testimonialPosition}>{testimonial.position}</p>
              <p className={styles.testimonialDescription}>{testimonial.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
