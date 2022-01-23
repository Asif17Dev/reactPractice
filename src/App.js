import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router  ,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FooterSection from './components/FooterSection';
import SmoothScrollBar from './components/SmoothScrollBar';

function App() {
  return (
    <div className="App">
    <Router>
   

    <NavMenu/>
    
    <SmoothScrollBar>
    
    <Routes>
   
      <Route path="/about"  element={<About />}/>
    
      <Route path="/projects" element={ <Projects /> } /> 
   
      <Route path="/contact" element={<Contact />} /> 
   
      <Route path="/" element={<Home />} /> 

      </Routes>

      <FooterSection />
      
      </SmoothScrollBar>
  
    </Router>

    </div>
  );
}

export default App;
