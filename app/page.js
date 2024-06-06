import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import ProfilePicture from '@/components/ProfilePicture'
import SocialLinks from '@/components/SocialLinks'
import Skills from '@/components/Skills'
import ProjectCard from '@/components/ProjectCard'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

export default function Home() {
  const skills = [
    { name: "Reactjs", image: "/icons8-react-100.png" },
    { name: "Nodejs & Express", image: "/icons8-node-js-96.png" },
    { name: "MongoDB", image: "/icons8-mongodb-96.png" },
    { name: "Github", image: "/icons8-github-100.png" },
    { name: "HTML", image: "/icons8-html-96.png" },
    { name: "CSS", image: "/icons8-css-100.png" },
    { name: "Javascript", image: "/icons8-js.gif" },
    { name: "Cpp", image: "/icons8-c-plus-plus-64.png" },
    { name: "Redux Toolkit", image: "/icons8-redux-144.png" },
    { name: "Tailwind Css", image: "/icons8-tailwind-css-144.png"},
    { name:"Nextjs", image:"/icons8-nextjs-144.png"}
  ];
  const projects = [
    // {name:"UniComplaints",link:"https://github.com/Aman8244/unicomplaints/tree/main",detail:"xx"},
    { name: "LiveStock Guardian", link: "https://github.com/Aman8244/E-Commerce-MERN", image: "/livestock-guardian.png", detail: "This is a hackathon project (VGU Code Red 3.0 trialthon 2023) in which we solved the problem of early detection of diseases using AI.Tech Stack- MERN and flask for making api to machine learning model.", time: "Oct 2023 - Oct 2023" },
    { name: "Trendy Store (E-Commerce)", link: "https://github.com/Aman8244/Livestock-Guardian", image: "https://perfecto-web.com/uploads/portfolio/420/yucar-responsive.png", detail: "An e-commerce app which is built using MERN stack and has all the basic functionalities of an shopping website.", time: "May 2023 - Jun 2023" }
  ];
  return (
    <main>
      <div className={styles.home}>
        <Navbar />
        <div className="home-section">
          <section className="intro">
            <div>
              <p className="intro-para">
                I'M <span>Aman Singh</span><br />
                Full Stack MERN Developer
              </p>
              <button className="contact-btn"><Link href={"/Aman-Singh-Resume.pdf"}>Hire me</Link></button>
            </div>
          </section>
          <section className="profile-pic">
            <div>
              <ProfilePicture />
            </div>
          </section>
          <section className="social-media-links">
            <SocialLinks />
          </section>
        </div>
      </div>
      <div id="about" className={styles.about}>
        <div className="about-div">
          <h1>
            About
          </h1>
          <div className="about-para">
            <hr />
            <p>

              Hello! I'm Aman Singh, a passionate and ambitious MERN
              Stack Developer.I have a strong foundation in web development, with a
              focus on creating dynamic and user-friendly web
              applications using the MERN (MongoDB, Express.js, React,
              Node.js) stack.
            </p>
          </div>
        </div>
        <div className="skills">
          <div>
            <h2>My Skills</h2>
          </div>
          <div>
            {skills.map((el, key) => {
              return (
                <div key={key} className="maindiv-skills">
                  <Skills {...el} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div id="portfolio" className={styles.portfolio}>
        <div className="portfolio">
          <h1>Portfolio</h1>
          <hr />
        </div>
        <div>
          {projects.map((el, key) => {
            return (
              <div key={key} className="project-card">
                <ProjectCard {...el} />
              </div>
            )
          })}
        </div>
      </div>
      <div id="contact" className={styles.contact}>
        <ContactMe />
      </div>
    </main>
  )
}
