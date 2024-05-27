import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/home/Home';
import About from './pages/about/About'
import Design from './pages/design/Design'
import Wireframe from './pages/wireframes/Wireframe'
import Style from './pages/styleguide/Style'
import Theory from './pages/theory/Theory'
import Art from './pages/art/Art'

//Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <React.Fragment>
    <HashRouter basename="/">
        <Navbar />
        <Routes>

          {/* Routing for main pages */}
    
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
           <Route path="/design" element={<Design />} />
          <Route path="/theory" element={<Theory/>} />
          <Route path="/art" element={<Art/>} />  

          {/* Routing for sub-pages */}
          
          <Route path="/design/wireframes" element={<Wireframe />} />
          <Route path="/design/styleguide" element={<Style />} />

        </Routes>
      </HashRouter>
        <Footer/>
    </React.Fragment>
  );
}

export default App;