import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import ProfilePicture from '@/components/ProfilePicture'
import SocialLinks from '@/components/SocialLinks'
import Skills from '@/components/Skills'
import ProjectCard from '@/components/ProjectCard'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import Footer from '@/components/Footer'

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
    { name: "Tailwind Css", image: "/icons8-tailwind-css-144.png" },
    { name: "Nextjs", image: "/icons8-nextjs-144.png" },
    { name: "Typescript", image: "/icons8-typescript-96.png" }
  ];
  const projects = [{ name: "AgriScan", link: "https://github.com/Aman8244/AgriScan", detail: "AgriScan is a platform where user can upload crop image and with the help of AI, software will detect if that crop is healthy or not. Features – Crop Disease Detection, AI Chatbot ,Report Generation , Multi-Language Support.", image: "/Agriscan.png", time: "Oct 2024 - Oct 2024" },    ,
  { name: "Artisphere", link: "https://artisphere-aman-singh.vercel.app/", detail: "Artisphere is a unique platform where users can sell their own art products and buy different arts.", image: "/artisphere.png", time: "June 2024 - June 2024" },
  { name: "Food Planet", link: "https://food-planett.netlify.app/", detail: "A Food Ordering System where user can order food from various restaurants and variety of food items.", image: "/foodplanet.png", time: "March 2024 - March 2024" },
  { name: "UniComplaints", link: "https://github.com/Aman8244/unicomplaints/tree/main", detail: "A platform where university students can raise complaints adding images and admin can respond to the issues via attaching resolved images also plagarism check for issues raised", image: "/unicomplaints.png", time: "Feb 2024 - Feb 2024" },
  { name: "LiveStock Guardian", link: "https://github.com/Aman8244/Livestock-Guardian", image: "/livestock-guardian.png", detail: "This is a hackathon project (VGU Code Red 3.0 trialthon 2023) in which we solved the problem of early detection of diseases using AI.Tech Stack- MERN and flask for making api to machine learning model.", time: "Oct 2023 - Oct 2023" },
  { name: "Trendy Store (E-Commerce)", link: "https://github.com/Aman8244/E-Commerce-MERN", image: "https://cdn.dribbble.com/userupload/3772713/file/still-fc903bb220a0746203642bc9bce89e08.png", detail: "An e-commerce app which is built using MERN stack and has all the basic functionalities of an shopping website.", time: "May 2023 - Jun 2023" }
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
              A passionate Software Developer with hands-on experience and strong understanding in full-stack web development, specializing in the MERN stack
              (MongoDB, Express.js, React.js, Node.js) , Nextjs , Typescript and can quickly adapt other frameworks also. With over a year of experience .Driven by a passion for
              continuous learning, I'm committed to exploring new technologies and expanding my knowledge base.
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
      <Footer />
    </main>
  )
}
