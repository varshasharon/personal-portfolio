import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';

import wfimg from '../assets/img/about.png'
import './Background.css'; // Import your background CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Developer.", "Designer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        AOS.init({
            duration: 1500, // Duration of animations
            once: true, // Whether animation should happen only once
            mirror: false // Whether elements should animate out while scrolling past them
        });
    }, []);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return (
        <>
        <section className="banner" id="home">
            {/* Background Divs */}
            <div className="absolute">
            <div className="absolute inset-0 justify-center">
            <div class="bg-shape-1 bg-pink"></div>
            <div class="bg-shape-2 bg-teal"></div>
            <div class="bg-shape-3 bg-purple"></div>
            <div class="bg-shape-4 bg-blue"></div>
            <div class="bg-shape-5 bg-yellow"></div>
            <div class="bg-shape-6 bg-green"></div>
            <div class="bg-shape-7 bg-red"></div>
            <div class="bg-shape-8 bg-orange"></div>
            </div>
        </div>


<div className="logo">
<h4>Varsha Sharon</h4>
</div>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12}>
                    
                        <h1>Hello there, I'm a Web <span className="wrap">{text}</span></h1>
                        <span className="tagline">Bringing creative visions to life through blending aesthetics</span>
                        <a href="#contact-me" ><button>Let’s Connect</button></a>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/varsha-sharon-474ab3227/" target="_blank" ><img src={navIcon1} alt='navicon1' /></a>
                                <a href="https://github.com/varshasharon" target="_blank"><img src={navIcon2} alt='navicon2' /></a>
                                <a href="https://www.figma.com/design/2MxTIk0K3a8nOBNAx70AEQ/Projects?node-id=0-1&t=0WInJIYfbA0f22Li-1" target="_blank"><img src={navIcon3} alt='navicon3' /></a>
                            </div>
                        </span>
                        
                    </Col>
                </Row>
            </Container>
        </section>
        <section data-aos="fade-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,160C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="two-column-section" >
    <div className="image-column">
        <img src={wfimg} alt="description" />
      </div>
      <div className="text-column" data-aos="zoom-in">
        <h2>Varsha Sharon</h2>
        <p><span> a junior web designer, front-end developer & UI/UX enthusiast </span></p>
        <p>
        With a passion for innovation and a knack for blending creativity and code, I specialize in bringing websites to life using technologies like HTML, CSS, JavaScript, and React. From wireframes to fully-deployed projects, I'm in my element when I'm designing and building. <br/><br/>
        But it’s not all work and no play!<br/><br/> When I’m not glued to my screen perfecting pixels, you’ll find me honing my skills as a 10m rifle shooter or immersing in my art studio as a freelance artist!
        </p>
        <button><a href="https://varshasharon.github.io/art-portfolio/" target="blank">Visit my gallery!</a></button>
      </div>
      
    </div>
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,160C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        
        </section>
       </>
    );
}
