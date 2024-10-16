import React from "react";
import { useEffect } from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Timeline() {
  useEffect(() => {
    AOS.init({
        duration: 1500, // Duration of animations
        once: true, // Whether animation should happen only once
        mirror: false // Whether elements should animate out while scrolling past them
    });
}, []);
  return (
   
    
    
    <MDBContainer fluid className="py-5"  id='timeline' data-aos="fade-up">
        <h2>Experience Milestones</h2>
      <div className="main-timeline">
      <TrackVisibility>
          {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <div className="timeline left"  >
          <MDBCard data-aos="slide-right">
            <MDBCardBody className="p-4" >
              <h3>2022</h3>
              <h5>Intern at Smartknower</h5>
              <p className="mb-0">
              During my internship at SmartKnower, I honed my skills in real-time web application development, collaborating effectively to deliver scalable and efficient solutions.              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard data-aos="slide-left">
            <MDBCardBody className="p-4">
              <h3>2023</h3>
              <h5>Cybersecurity Internship</h5>
              <p className="mb-0">
              Implemented security solutions by addressing system vulnerabilities, building a strong foundation in cybersecurity practices for creating resilient systems.              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard data-aos="slide-right">
            <MDBCardBody className="p-4">
              <h3>2024</h3>
              <h5>React JS Workshop</h5>
              <p className="mb-0">
              Through hands-on experience, I developed dynamic user interfaces using component-based architecture, deepening my expertise in state management and creating interactive, efficient web applications.              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard data-aos="slide-left">
            <MDBCardBody className="p-4">
              <h3>2024</h3>
              <h5>NSIC Internship</h5>
              <p className="mb-0">
              Learning new technologies and component libraries like Daisy UI and React Bootstrap helped me to better handle user friendly and efficient user interfaces. At the end of the internship, I was able to develop a frontend mini-project called “Flavourly” using HTML, CSS, JavaScript and JSON. The project contains a list of recipes where users can like their favorite dishes and save them in a personalized “Favorites” section.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard data-aos="slide-right">
            <MDBCardBody className="p-4">
              <h3>2024</h3>
              <h5>UI/UX Intern ay Skill First Labs</h5>
              <p className="mb-0">
              Interned at Skill First Labs, a startup specializing in LMS software products, as a UI/UX designer. In this role, I collaborated with cross-functional teams to design a highly functional website while ensuring the designs aligned with end user's requirements and product goals. This experience allowed me to stay updated on the latest design trends and tools while effectively communicating with developers and internal teams.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        </div>}
      </TrackVisibility>
      </div>
      
    </MDBContainer>

  );
}
