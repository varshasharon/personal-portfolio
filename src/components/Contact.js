import React from "react";
import Swal from 'sweetalert2';
import { useEffect } from "react";
import contImage from '../assets/img/cont2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        formData.append("access_key", "36a55f33-2c81-4d91-964d-ac516007672f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Sweet!",
                text: "Lots of messages today, but you’re on my list!",
                imageUrl: contImage,
                imageWidth: 250,
                imageHeight: 250,
                imageAlt: "Custom gif"
              });
              event.target.reset();
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            once: true, // Whether animation should happen only once
            mirror: false // Whether elements should animate out while scrolling past them
        });
    }, []);


    return (
        <>
        <section data-aos="fade-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,272C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        
        <section className="contact" id="contact-me">
            
            <form onSubmit={onSubmit}>
                <h2>Get In Touch</h2>
                <div className="input-box">
                    <label>Name</label>
                    <input type="text" className="field" name="name" placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                    <label>Your email please. No spam, I promise :)</label>
                    <input type="email" className="field" name="email" placeholder="Enter your email" required/>
                </div>
                <div className="input-box">
                    <label>Share your wisdom (or a friendly hello)</label>
                    <textarea name="message"  className="field mess" placeholder="Enter your message" required></textarea>
                </div>
                <div className="form-button-container">
                    <button id="contact-button" type="submit">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                        </svg>
                        </div>
                    </div>
                    <span>Send</span>
                    </button>
                </div>
            </form>
        </section>
        <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,245.3C480,213,600,139,720,122.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>        
        
        </div>
        </section>
        
        </>
    )
}

export default Contact;
