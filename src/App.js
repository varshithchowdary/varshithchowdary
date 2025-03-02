import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bob from './components/Bob/Bob';
import About from './components/About/About';
import Profile from './components/Profiles/Profile';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
    <Navbar/>
    <Bob/>
    <About/>
    <Profile/>
    <Contact/>
    <Footer/>
   </div> 
  );
}

export default App;
