import React from 'react'
import projects from '../../data/project'
import styles from './Project.module.css'


export const Project = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.project}>
        {projects.map((project,id)=>{
          return(
            <div key={id} className={styles.projcontainer}>
              <img src={project.img} alt='projectImg' className={styles.image}/>
              <h3 className={styles.projtitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {
                  project.skills.map((skill,id)=>{
                    return(
                    <li key={id} className={styles.skill}>{skill}</li>
        )})}
              </ul>
             <div className={styles.links}>
              {/* <a href={project.demoLink} className={styles.link}>Demo</a> */}
              <a href={project.sourceCodeLink} className={styles.link}>Source</a>
            </div>
             </div>


          )
        })}
      </div>
    </section>
  )
}
