import React from 'react'
import styles from './Hero.module.css';
// import { getImageUrl } from './util';
import womanImg from "/src/assets/hero/Me.jpg"; 



export const  Hero=()=> {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hlo.I'm Kratika</h1>
            <p className={styles.description}>
              I'm doing my Java-Full Stack Development with parallel I'm doing Btech degree from JIT(Jawaharlal Institute of Technology),Borawan.
              It's my first portfolio for present my skills.
              I hope you all like it! I
            </p>
            <a href='/Contact' className={styles.contactBtn}>Contact Me</a>
        </div>
        {/* <img src={getImageUrl('hero/woman.png')} alt='Here is image' className={styles.heroImg}/> */}
        <img src={womanImg} alt='Here is image' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
export default Hero;
