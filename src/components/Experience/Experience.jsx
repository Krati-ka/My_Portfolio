import React from 'react'
import skills from "../../data/skills"
import styles from './Experience.module.css'
export const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=>{
                    return(
                       <div key={id} className={styles.skill}>
                        <div className={styles.skillImg}>
                            <img src={skill.imgSrc} alt={skill.name}/>
                            </div>
                            <p>{skill.name}</p>
                            </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}
export default Experience;