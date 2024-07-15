import React from 'react';
import styles from './MyFeeds&post.module.css';
import postImage from '../../assets/MyFeeds&postImage.svg';

const MyFeedsAndPosts: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>My Feed & Posts</p>
            <p className={styles.subtitle}>Know more about the latest feeds and post on my socials</p>

            <div className={styles.Secondcontainer}>


                <div className={styles.followText}>
                    <span className={styles.highlight}>Follow </span>
                    <span className={styles.highlight}>to be</span>
                    <span className={styles.highlight}>Facinated</span>
                </div>
                <div className={styles.postsContainer}>
                    <div className={styles.post}>
                        <span className={styles.headingOfPost}><h3>Jammey John</h3>
                            <p>INSTAGRAM</p>
                        </span>
                        <p>Very easy to use and data is good way to get your first card. The Zopa app is very friendly and amazing app.</p>
                        <img src={postImage} alt="Post" className={styles.postImage} />
                    </div>
                    <div className={styles.post}>
                    <span className={styles.headingOfPost}>
                        <h3>Jammey John</h3>
                        <p>QUORA</p>
                    </span>
                        <p>Very easy to use and also a good way to get your first card. The Zopa app is a very friendly and amazing app. It has a really easy and detailed design to the app. The app gives you a sense of security and it's easy for parental control also. It is a very helpful app for students who are not working and also for people under the age of 18.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFeedsAndPosts;
