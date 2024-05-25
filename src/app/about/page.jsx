import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>About Agency</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur exercitationem amet aspernatur dolor, nesciunt, minus dicta error quasi quam similique necessitatibus. Consequatur iste eius voluptas obcaecati, dolorum reiciendis eligendi ipsa.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K</h1>
            <p>Year of Experince</p>
          </div>
          <div className={styles.box}>
            <h1>10K</h1>
            <p>Projects</p>
          </div>
          <div className={styles.box}>
            <h1>20M</h1>
            <p>views</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"}
          alt='pic'
          fill 
          className={styles.img}/>
      </div>
    </div>
  )
}

export default About
