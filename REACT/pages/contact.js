import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2>Contact our Support and Sales team</h2>
          <p>Need to get in touch with the team? We’re all ears.</p>
          <div className={styles.buttonGroup}>
            <Link href="https://www.facebook.com/media/set/?set=a.382641500638717&type=3" passHref>
              <button className={styles.contactButton}>Contact Us</button>
            </Link>
            <Link href="https://www.facebook.com/media/set/?set=a.382641500638717&type=3" passHref>
              <button className={styles.supportButton}>Visit Support</button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/247644288_207194984828338_8349154708192788513_n.jpg?stp=dst-jpg_tt7&_nc_cat=108&cb=99be929b-defccdb7&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=udklp2ObBaUQ7kNvgFwfOb9&_nc_ht=scontent.fbkk6-1.fna&_nc_gid=AyP7D0g1X0Xm94rpFuZeDbM&oh=00_AYAbk0WQ-thp7Ctsy932rzJ3V4AKN72W7cVgO3uVZoduXw&oe=67067A0B"
            alt="Contact Support"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.footerInfo}>
        <p>สำนักงานอธิการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, Bangkok, Thailand, Bangkok</p>
        <p>Email: <a href="mailto:pmo@kmitl.ac.th">pmo@kmitl.ac.th</a></p>
      </div>
    </div>
  );
};

export default Contact;
