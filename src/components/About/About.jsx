import React from 'react'
import styles from './About.module.css'
import img from '/src/assets/about/lap2.avif'
import cimg from '/src/assets/about/cursor.png'
export const About = () => {
  return (
    <section className={styles.container} id='About'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={img} alt='Here is image'  className={styles.aboImg}/>
        <ul className={styles.aboItems}>
            <li className={styles.aboItem}>
             <img src={cimg} alt='FDcursor' className={styles.aboItemImg}/>
             <div className={styles.aboItemText}>
                <h1>Frontend Developer</h1>
                <p>
                    I'm doing Frontend Developer practice in Trainning Course.
                    Gaining experience with optimize my skills.
                </p>
            </div>
            </li >
            <li className={styles.aboItem}>
             <img src={cimg} alt='FScursor' className={styles.aboItemImg}/>
            <div className={styles.aboItemText}>
                <h1>Full Stack Developer</h1>
                <p>
                    I have completed Full Stack Developer course.
                    Gaining Knowledge  with optimize my skills and learning.
                </p>
            </div>
            </li>
            <li className={styles.aboItem}>
             <img src={cimg} alt='UIcursor' className={styles.aboItemImg}/>
            <div className={styles.aboItemText}>
                <h1>Backend Designer</h1>
                <p>
                    I'm Doing SpringBoot course for optimize my java skill
                    to enhance my Knowledge in Backend.
                </p>
            </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
export default About;
