import './App.css';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import Timeline from './components/Timeline';
import Skill from './components/Skill';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  return (
    <div className="App">
      <Banner/>
      
      <Skill/>

      <Projects/>
      <Timeline/>
      <Contact/>
    </div>
  );
}

export default App;
