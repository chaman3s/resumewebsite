import './App.css'
import Header from './components/Header'
import dp from "./assets/Images/2.jpg"
import About from './components/About'
import Skill from "./components/Skill"
import ListContainer from './components/ListContainer'
import ctech from "./assets/Images/logo.png"
import intern from "./assets/Images/intern.webp"
import gtbitLogo from "./assets/Images/gtbit.jpg"
import pusaLogo from "./assets/Images/pusa.png"
import { faPlane,faCarSide,faBriefcase, faAddressCard,faMapMarkerAlt,faMobile,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Project from './components/Project'
import p1 from "./assets/Images/project1.png"
import p2 from "./assets/Images/project2.png"
import ContactUs from './components/ContectUs'


function App() {

  return (
    <>
      <Header menuList={[{item:"Home",id:""},{item:"About",id:"about"},{item:"Skills",id:"skills"},{item:"Experience",id:"experience"},{item:"Education",id:"education"},{item:"Portfolio",id:"portfolio"},{item:"Contact",id:"contact"}]}/>
      <main>
        <About myImage={dp} summary={"  Software developer having a total of 2 years of experience in building interactive, user-centric web applications and dashboards using tech stack like React javascript html css and redux and node."}/>
        <Skill data={["JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS", "SQL","Tailwind CSS","Git"]}/>
        <ListContainer expList={[{
          logo: ctech,
          post: " Software Engineer",
          companyName:"Cctech health & env",
          timeline:"Feb 24 – present",
          roleDetail:`
          ● Developed and optimized an Admin Dashboard for monitoring various key performance indicators (KPIs) such as daily active users, onboarding stats, and user feedback.
●  Built a Weekly Rider Leaderboard displaying rankings based on reward coins earned. 
●  Created a Rider Profile View for admins to track user activity and engagement.
●  Designed and implemented a Reward Creation Section to allow riders to view and redeem rewards based on accumulated coins.
          `

        },{
          logo: intern,
          post: "Intern",
          companyName:"Granalyze Tech",
          timeline:"Jun 23 – Jan 24",
          roleDetail:`
          ●  Exprto offers guidance and mentorship opportunities for IIT JEE and NEET aspirants, enabling members to book sessions with mentors during available slots for queries and guidance related to these exams.
●  Integrated Paytm payment gateway for secure and seamless transactions. 
●  Created session listing page, used pagination to fetch and load session lazily.
          `
        }]}
        title={"Experience"}
        icon={faPlane}
        titleIcon={faBriefcase}
         styles={[{img:"",head:""},{img:"",head:""}]}
        />
        <ListContainer expList={[{
          logo: gtbitLogo,
          post: " B.tech",
          companyName:"Guru Tegh Bahadur institute of technology",
          timeline:"Aug 2021 - jun 2024",
        },{
          logo: pusaLogo,
          post: "Diploma",
          companyName:"Pusa Institute Of Technology",
          timeline:"Jun 2018 – Jun 2021",
          
        }]}
        title={"Education"}
        icon={faCarSide}
        titleIcon={faBriefcase}
        styles={[{img:{top:"-3px",position:"absolute"},head:{textAlign: "end",position: "absolute",left: "-117px"}},
          {img:{position:"absolute",left: "145px"},head:{left:"96px"}}]}
        />
        <Project projectList={[{img:p1,detail:`PayWeb
is secure platform for transaction history `},{img:p2,detail:`PdfReader is 
A feature-rich document reader`}]}/>
<ContactUs icons={[faAddressCard,faMapMarkerAlt,faMobile,faEnvelope,faEnvelope]}/>

      </main>
    </>
  )
}

export default App
