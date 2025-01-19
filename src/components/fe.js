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
                    <h3 className="skills__name">HTML & CSS</h3>
                    <span className="skills__level">Advanced</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-javascript bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>


                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-react bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">ReactJS</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                    </div>

                    
                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-mongodb bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data" data-aos="zoom-in">
                    <i class='bx bxl-nodejs bx-tada' ></i>
                    <div>
                    <h3 className="skills__name">NodeJS</h3>
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