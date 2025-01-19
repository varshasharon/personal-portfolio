import React from "react";
import 'boxicons';
import "./Skill.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Ui = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            once: true, // Whether animation should happen only once
            mirror: false // Whether elements should animate out while scrolling past them
        });
    }, []);

    return(
        <div className="skills__content">
            <h3 className="skills__title">Web Designer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-figma bx-tada'></i>
                    <div>
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bx-navigation bx-tada'></i>
                    <div>
                    <h3 className="skills__name">Wireframing & Prototyping</h3>
                    <span className="skills__level">Advanced</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxs-magic-wand bx-tada'></i>
                    <div>
                    <h3 className="skills__name">Mockups</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxs-cog bx-tada' ></i>
                    <div>
                    <h3 className="skills__name" >UX Research & Testing</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-adobe bx-tada' ></i>
                    <div>
                    <h3 className="skills__name" >Adobe After Effects</h3>
                    <span className="skills__level">Basic</span>
                    </div>
                    </div>

                    

                    

                    

                </div>
                <div className="skills__group">
                </div>

            </div>
        </div>
    )
}
export default Ui