import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useEffect } from "react";
import { ProjectCard} from "./ProjectCards";
import projImg1 from "../assets/img/ui5.png";
import projImg2 from "../assets/img/fe3.png";
import projImg3 from "../assets/img/ui1.png";
import projImg4 from "../assets/img/fe1.png";
import projImg5 from "../assets/img/ui4.png";
import projImg6 from "../assets/img/fe4.png";
import projImg7 from "../assets/img/bento-ui.png";
import projImg8 from "../assets/img/dasboard.png";
import projImg9 from '../assets/img/ui2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



export const Projects = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000, // Duration of animations
        once: true, // Whether animation should happen only once
        mirror: false // Whether elements should animate out while scrolling past them
    });
}, []);

  const projects = [
    {
      title: "The Plant Shop",
      description: "UI Design",
      imgUrl: projImg3,
    },
    {
      title: "Tutor Tree",
      description: "UI Design",
      imgUrl: projImg1,
    },
    {
      title: "Trackr Dashboard",
      description: "UI Design",
      imgUrl: projImg8,
    },
    {
      title: "Bento UI",
      description: "UI Design",
      imgUrl: projImg7,
    },
    {
      title: "The Sneakers Club",
      description: "UI Design",
      imgUrl: projImg5,
    },
    {
      title: "AvatarGen",
      description: "UI Design",
      imgUrl: projImg9,
    }
    
  ];
  const project2 = [
    
    {
      title: "The Plant Shop",
      description: "ReactJS",
      imgUrl: projImg6,
    },
    {
      title: "Flavourly",
      description: "HTML, CSS, JS",
      imgUrl: projImg4,
    },
    {
      title: "Eatsy Cuisine",
      description: "HTML, CSS",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>

                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UI /UX </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Dev</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first" data-aos="fade-up">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" data-aos="fade-up">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
                
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}