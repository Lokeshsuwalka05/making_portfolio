import React, { useState } from 'react';
import styles from './Ed_j.module.css';
import HINDUSTHAN_UNIV from '../../assets/HINDUSTHAN_UNIV.svg';
import IIITB from '../../assets/IIITb.svg';
import IMT from '../../assets/IMT_with_white_circle.png';
import karunya from '../../assets/karunya_logo 1.svg';
import Liverpool from '../../assets/Liverpool.svg';
import stanford from '../../assets/stanford.svg';
import deakin_logo from '../../assets/Deakin.svg';
import ATAL from '../../assets/ATAL.svg';
import PDEU from '../../assets/PDEU.svg';
import CISCO from '../../assets/CISCO.svg';
import MICROSOFT from '../../assets/MICROSOFT.svg';
import RAZORPAY from '../../assets/RAZORPAY.svg';
import NASSCOM from '../../assets/NASSCOM.svg';

interface EducationEntry {
  institution: string;
  degree: string;
  duration: string;
  logo: string;
}

interface StartupEntry {
  institution: string;
  description: string;
  duration: string;
  logo: string;
  location: string;
}

const EducationJourney: React.FC = () => {
  const [showCareer, setShowCareer] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showStartup, setShowStartup] = useState(false);

  const handleCareerClick = () => {
    setShowCareer(!showCareer);
    setShowEducation(false);
    setShowStartup(false);
  };

  const handleEducationClick = () => {
    setShowEducation(!showEducation);
    setShowStartup(false);
  };

  const handleStartupClick = () => {
    setShowStartup(!showStartup);
    setShowEducation(false);
  };

  const educationData: EducationEntry[] = [
    {
      institution: "Deakin University",
      degree: "Global Master of Business Administration (GMBA) in Leadership & Management",
      duration: "Jan 2023 - Feb 2025",
      logo: deakin_logo
    },
    {
      institution: "Institute of Management Technology, Ghaziabad",
      degree: "Advanced General Management Program",
      duration: "Dec 2022 - Dec 2023",
      logo: IMT
    },
    {
      institution: "Stanford University Graduate School of Business",
      degree: "Cohort 06, Business Management & Entrepreneurship",
      duration: "Feb 2023 - Jul 2023",
      logo: stanford
    },
    {
      institution: "International Institute of Information Technology Bangalore",
      degree: "PGDM, DATA SCIENCE",
      duration: "Feb 2020 - Apr 2021",
      logo: IIITB
    },
    {
      institution: "Liverpool John Moores University",
      degree: "Master's degree, Data Science",
      duration: "Apr 2021 - Nov 2022",
      logo: Liverpool
    },
    {
      institution: "Karunya International Higher Secondary School",
      degree: "High School, Computer Science",
      duration: "Jun 2013 - Jun 2015",
      logo: karunya
    },
    {
      institution: "Hindusthan College of Engineering and Technology",
      degree: "Bachelor of Engineering, Computer Science",
      duration: "2015 - 2019",
      logo: HINDUSTHAN_UNIV
    }
  ];

  const startupData: StartupEntry[] = [
    {
      institution: "Atal Incubation Centre - Pondicherry Engineering College Foundation (AIC-PECF)",
      description: "Startup Incubation, Entrepreneurship/ Entrepreneurial Studies",
      duration: "Aug 2023 - Present",
      logo: ATAL,
      location: "India"
    },
    {
      institution: "Pandit Deendayal Energy University (PDEU)",
      description: "Startup Incubation, Entrepreneurship/Entrepreneurial Studies",
      duration: "Feb 2023 - Present",
      logo: PDEU,
      location: "India"
    },
    {
      institution: "Incubate at Cisco Launchpad",
      description: "Cisco - Full-time",
      duration: "Jan 2023 - Present",
      logo: CISCO,
      location: "India"
    },
    {
      institution: "Microsoft Founder Hub Program",
      description: "Startup Member, Microsoft for Startups - Part-time",
      duration: "Nov 2022 - Present",
      logo: MICROSOFT,
      location: "India"
    },
    {
      institution: "Razor pay - Rize - Incubatee",
      description: "Razorpay - Full-time",
      duration: "Oct 2022 - Present",
      logo: RAZORPAY,
      location: "Remote"
    },
    {
      institution: "NASSCOM 10000 Startups - Incubation Program Member",
      description: "10000 Startups - Full-time",
      duration: "Aug 2022 - Present",
      logo: NASSCOM,
      location: "Kochi, Kerala, India"
    }
  ];

  return (
    <>
      <div className={styles.SectionTitle}>
        <p onClick={handleCareerClick}>Professional Career</p>
        <p className={showCareer ? '' : styles.hidden} onClick={handleEducationClick}>Education Career</p>
        <p className={showCareer ? '' : styles.hidden} onClick={handleStartupClick}>Startup Incubation</p>
      </div>

      <div className={`${styles.timeline} ${showEducation ? '' : styles.hidden}`}>
        {educationData.map((edu, index) => (
          <div
            className={`${styles.container} ${index % 2 === 0 ? styles.left_container : styles.right_container}`}
            key={index}
          >
            <div className={styles.text_box}>
              <img src={edu.logo} alt={`${edu.institution} logo`} className={styles.institution_logo} />
              <h3>{edu.institution}</h3>
              <p><strong>{edu.degree}</strong></p>
              <p>{edu.duration}</p>
              <span className={index % 2 === 0 ? styles.left_container_arrow : styles.right_container_arrow}></span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.timeline} ${showStartup ? '' : styles.hidden}`}>
        {startupData.map((startup, index) => (
          <div
            className={`${styles.container} ${index % 2 === 0 ? styles.left_container : styles.right_container}`}
            key={index}
          >
            <div className={styles.text_box}>
              <img src={startup.logo} alt={`${startup.institution} logo`} className={styles.institution_logo} />
              <h3>{startup.institution}</h3>
              <p><strong>{startup.description}</strong></p>
              <p>{startup.duration}</p>
              <span className={index % 2 === 0 ? styles.left_container_arrow : styles.right_container_arrow}></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationJourney;
