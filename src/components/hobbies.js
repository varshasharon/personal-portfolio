import React from 'react'

const hobbies = () => {
  return (
    <>
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
  )
}

export default hobbies