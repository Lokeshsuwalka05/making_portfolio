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
    description: 'NavIC (Navigation with Indian Constellation) is designed to provide “more accurate domestic navigation” for users in India. It’s designed by ISRO for accurate real-time positioning, timing services, and messaging. communications, timing, and location.',
    imageUrl: sampleImage
  },
  {
    name: 'Derrick John',
    position: 'CTO at Bell Enterprises',
    description: 'NavIC (Navigation with Indian Constellation) is designed to provide “more accurate domestic navigation” for users in India. It’s designed by ISRO for accurate real-time positioning, timing services, and messaging. communications, timing, and location.',
    imageUrl: sampleImage
  },
  {
    name: 'Derrick John',
    position: 'CTO at Bell Enterprises',
    description: 'NavIC (Navigation with Indian Constellation) is designed to provide “more accurate domestic navigation” for users in India. It’s designed by ISRO for accurate real-time positioning, timing services, and messaging. communications, timing, and location.',
    imageUrl: sampleImage
  },
  {
    name: 'Derrick John',
    position: 'CTO at Bell Enterprises',
    description: 'NavIC (Navigation with Indian Constellation) is designed to provide “more accurate domestic navigation” for users in India. It’s designed by ISRO for accurate real-time positioning, timing services, and messaging. communications, timing, and location.',
    imageUrl: sampleImage
  }



];

const Testimonials: React.FC = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.05,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.06,
          centerPadding: "30px",
        }

      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.08,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <div className={styles.testimonialsSection}>
      <p className={styles.sectionTitle}>Testimonials</p>
      <div className={styles.testimonialsContainer}>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div
              className={`${styles.testimonialCard} ${index%2!=0?styles.testimonialCardOdd:''}`}
              key={index}
           
            >
              {/* {index % 2 === 0 && ( */}
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className={styles.testimonialImage}
                />
              {/* )} */}
              <div>
                <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                <p className={styles.testimonialPosition}>{testimonial.position}</p>
                <p className={styles.testimonialDescription}>{testimonial.description}</p>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
