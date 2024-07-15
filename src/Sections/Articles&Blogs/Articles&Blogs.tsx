import React from 'react';
import styles from './Articles&Blogs.module.css';
import sampleImage from '../../assets/A&B_image.svg';

interface Article {
  title: string;
  description: string;
  source: string;
  publishedDate: string;
  imageUrl: string;
}

const articlesData: Article[] = [
  {
    title: 'TITLE TITLE TITLE Lorem ipsum dolor sit amet consectetur',
    description: 'First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :',
    source: 'LinkedIn',
    publishedDate: 'June 22, 2024',
    imageUrl: sampleImage
  },
  {
    title: 'TITLE TITLE TITLE Lorem ipsum dolor sit amet consectetur',
    description: 'First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :First Para of the Article :',
    source: 'LinkedIn',
    publishedDate: 'June 22, 2024',
    imageUrl: sampleImage
  }
];

const ArticlesAndBlogs: React.FC = () => {
  return (
    <div className={styles.articlesBlogsSection}>
      <p className={styles.sectionTitle}>Articles & Blogs</p>
      {articlesData.map((article, index) => (
        <div className={styles.articleCard} key={index}>
          <img src={article.imageUrl} alt="Article" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleDescription}>{article.description}</p>
            <div className={styles.articleFooter}>
              <span className={styles.articleSource}>Source: {article.source}</span>
              <span className={styles.articlePublishedDate}>Published on: {article.publishedDate}</span>
            </div>
          </div>


        </div>
      ))}
    </div>
  );
};

export default ArticlesAndBlogs;
