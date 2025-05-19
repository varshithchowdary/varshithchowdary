import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bob from './components/Bob/Bob';
import About from './components/About/About';
import Profile from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';

function App() {
  return (
   <div>
    <Navbar/>
    <Bob/>
    <About/>
    <Skills/>
    <Timeline/>
    <Contact/>
    <Footer/>
   </div> 
  );
}

export default App;
