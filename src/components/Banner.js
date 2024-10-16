import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';
import imag from '../assets/img/wf.png'
import wfimg from '../assets/img/wf1.png'
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
                                <a href="https://www.figma.com/proto/UGqppJEQO0tZegJJtBaZeK/Bento-UI?node-id=1-2&t=Zvhx4Rm7Y9nn8eSf-1" target="_blank"><img src={navIcon3} alt='navicon3' /></a>
                            </div>
                        </span>
                        
                    </Col>
                </Row>
            </Container>
        </section>
        <section data-aos="fade-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,160C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="two-column-section" >
      <div className="text-column" data-aos="zoom-in">
        <h2>Sketch to Screen: <br/><span>The Wireframing Magic</span></h2>
        <p><i>Where ideas take shape before they get pixel-perfect!</i></p>
        <p>
        Before the pixels and code, every great design starts with a simple sketch. Wireframing is my favorite part of the process because it lets ideas flow without boundaries. This is where I get to test concepts, play around with layouts, and find the best user experiences—all before diving into development. It’s like creating a roadmap that helps bring the big picture into focus, one line at a time.         </p>
      </div>
      <div className="image-column">
        <img src={wfimg} alt="description" />
      </div>
    </div>
    <div className="two-column-section" >
      
      <div className="image-column">
        <img src={imag} alt="description" />
      </div>
      <div className="text-column" data-aos="zoom-in">
        <h2>Prototypes in Action: <br/><span>Test Driving Ideas</span></h2>
        <p><i>Making ideas actionable just ahead of the big reveal!</i></p>
        <p>
        Prototypes let me turn sketches into clickable experiences, testing designs and improving usability step by step. It’s a hands-on way to see how users interact with the design and make adjustments before going full speed ahead with development.
        </p>
      </div>
    </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,160C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        
        </section>
       </>
    );
}
