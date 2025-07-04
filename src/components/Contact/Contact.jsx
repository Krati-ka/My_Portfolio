import React from 'react'
import styles from './Contact.module.css'
import img1 from '/src/assets/contact/emailico.png'
import img2 from '/src/assets/contact/linkedin.png'
import img3 from '/src/assets/contact/github.png'
export const Contact = () => {
  return (
    <footer id='contact'className={styles.container}>
        <div className={styles.text}>
        <h1 >Contact</h1>
        <p>Feel free to reach out!!</p>
</div>
<ul className={styles.links}> 
    <li className={styles.link}>
        <img src={img1} alt='Here Image'/>
        <a href='kratikamhsgmail.com'>kratikamhs@gmail.com</a>
    </li>
    <li className={styles.link}>
        <img src={img2} alt='Here Image'/>
        <a href='https://www.linkedin.com/in/kratikarajput'>https://www.linkedin.com/in/kratikarajput</a>
    </li>
    <li className={styles.link}>
        <img src={img3} alt='Here Image'/>
        <a href='https://github.com/Krati-ka'>https://github.com/Krati-ka</a>
    </li>
</ul>

    </footer>
  )
}
