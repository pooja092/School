import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Courses from './components/courses/Courses';
import Home from './components/home/Home';

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </>
    
  
  );
}

export default App;
