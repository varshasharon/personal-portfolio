import React from "react";
import 'boxicons';
import "./Skill.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Fe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            once: true, // Whether animation should happen only once
            mirror: false // Whether elements should animate out while scrolling past them
        });
    }, []);

    return(
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-html5 bx-tada'></i>
                    <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-css3 bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-javascript bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>

                    </div>
                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-bootstrap bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-react bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">React</h3>
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
export default Fe