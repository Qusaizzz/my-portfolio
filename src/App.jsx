import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Project1 from './components/Project1'; // <-- added
import Project2 from './components/Project2';
import Project3 from './components/Project3';


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <About />
          <Projects />
          <Footer />
        </>
      } />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
    </Routes>
  );
}

export default App;
