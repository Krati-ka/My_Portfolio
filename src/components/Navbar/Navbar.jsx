import React from 'react'
import styles from "./navbar.module.css";
export const  Navbar = ()=> {
  return (
  
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <ul className={styles.menuitem}>
                <li>
                    <a href="#About">About Me</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar;