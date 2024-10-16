import React from "react";
import "./Skill.css"; // Import the CSS file
import './Background.css'; // Import your background CSS
import Ui from './ui';
import Fe from './fe'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            once: true, // Whether animation should happen only once
            mirror: false // Whether elements should animate out while scrolling past them
        });
    }, []);
    return (

                        
        <section className="skills section" id="skills" data-aos="fade-up">
            
            <h2>Skill Spectrum</h2>
            <div className="skills__container container grid">
                <Ui/>
                <Fe/>
            </div>
        </section>
        

    )
}
export default Skills