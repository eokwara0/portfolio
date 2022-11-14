import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



export default function NavBar( props ){
  return <div>
    <nav className="nav-bar">
        <div className="nav-bar-container">
          {props.data}
          <div className={ "name-nav " + styles.container}>
            <p>Emmanuel Okwara</p>
          </div>

          <div className={"nav-bar-div "}>
            <ul className={styles.nameContainer}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#skills">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

        </div>
      </nav>
      </div>
}

export function Section1(){

  return <div className={styles.section}>
      <div className={ styles.subsection1}>
        <Image className={styles.imageRadius} width={300} height={300} src="/profile.jpg"/>
      </div>
      <div className={styles.subsection2} >
        <h6 className={styles.smalltitle}>Software-Engineer</h6>
        <h1 className={styles.title + " " + styles.paragraph}>Emmanuel Okwara</h1>
        <div className={styles.description}>
          <p className={styles.paragraph}>An enthusiastic coder, with a passion for math ,<br/>problem solving and complex logic. I enjoy simplifying<br/> complex problem, and coding affords me that luxury.<br/>
My specialties include quickly learning new skills and<br/> programming languages, problem-solving, Agile-Methodologies,<br/> CI/CD,MVC architecture.

 My skills include <br/> C#, Java, NodeJS,, React, Python ,SQL, GraphQL, Docker, and Git/Github/GitLab.
</p>
        </div>
        
        <div className={styles.buttondiv}>
          <div className={styles.button1}><Link href="/resume.pdf">Download CV </Link></div>
          <div className={styles.button2}><a href="#contact">Contact Me</a></div>
        </div>
      </div>
  </div>
}


export function Section2(){

  let data = [
    { 
      skill: "Java" , 
      data:`I am proficient in the Java language and with the aptitude for 
        creating and designing Java-based applications, I  create , test and  manage software
          using the Java programming language and  tools like Apache maven , Junit and the spring framework.
          I can easily be integrated into a working team and be a contributing member.`
      },{
        skill:"NodeJs",
        data : `NodeJS is a JavaScript runtime used for building JavaScript applications,
                Using node I build and deploy back-end services using express, graphQl and MongoDB as well as build front-end applications
                using front-end frameworks such as ReactJs , NextJS and vanilla-JS , With the power of NodeJs I am able to integrate my front-end 
                applications with my back-end services 
                 `
      },{
        skill:"Database Management",
        data : `I am a critical thinker with a passion for tackling complex and complicated problems, I enjoy working with data , and 
                finding new way to manipulate and handle this data. To date I have worked on different database management systems , systems such as
                MySQL , MongoDB and PostgresQL.
                 `
      },{
        skill:"Architecture Design",
        data : `
                I build and manage distributed systems , using Java Or NodeJs , I Convert monolithic applications into more efficient and faster applications 
                using the micro-service architecture ,I believe in efficiency and improved performance as well as building quality software.
                `
      }
    ]
  return (
    <div className={styles.section2}>
      <div className={styles.skilldiv}>
        <h1 id="skills"className={styles.titlediv}>Skills</h1>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skilldatadiv}>
          {data.map( r => 
          <div className={styles.sec2data}>
            <h2>{r.skill}</h2>
            <p>{r.data }</p>
          </div>
          )}
      </div>
      </div>
      
    </div>
  )
}


export function Section3(){

  return <div className={styles.section3}>
      <div className={styles.contactInfo}>
        <div>
        <h1 id="contact">Contact Me</h1>

        </div>

        <div className={styles.contactdata}>
          <Image className={styles.imageRadius} src={"/profile.jpg"} width = {200} height={200}/>
          <section className={styles.sectioncontactcontainer}>
            <div className={styles.linkedin}>
              <Image src={"/linkedin.png"} width={20} height={20}/>
              <a href="https://linkedin.com/in/emmanuel-c-okwara">linkedin</a>
            </div>
            <div className={styles.linkedin}>
              <Image src={"/gmail.png"} width={20} height={20}/>
              <span>emmmanuelokwara001@gmail.com</span>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
            <input name="name"type="text" placeholder="Name"/>
            <input name="surname"type="text" placeholder="Surname"/>
            <input name="email"type="email" placeholder="example:nana@gmail.com"/>
            <input type="submit"/> 
        </form>
      </div>
  </div>
}

export function Footer(){
  return <div className={styles.footerdiv}>
      <div className={styles.footerInfo}>
        <h3> More </h3> 
          <ul className={styles.footerlist}>
              <li><Link href="/">About me</Link> </li>
              <li><Link href="#skills">My skills</Link> </li>
              <li><Link href="#contact">Contact</Link> </li>
          </ul>
      </div>

      <div className={styles.getintouch}>
          <h3> Get In Touch </h3>
          <ul>
            <li>emmmanuelokwara001@gmail</li>
            <li><Link href="https://linkedin.com/in/emmanuel-c-okwara/">linkedin</Link></li>
            <li><Link href="https://github.com/eokwara0">GitHub</Link></li>
          </ul>
      </div>
    </div>
}
