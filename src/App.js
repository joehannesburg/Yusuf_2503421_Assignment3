import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/home/home';
import About from './pages/about/about'

//Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <Router>
    
        <Navbar />
        <Routes>
          {/* Routing for pages */}
      
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/design" element={<TicketPurchase />} />
          <Route path="/theory" element={<ConfirmationPage />} />
          <Route path="/art" element={<ConfirmationPage />} />  */}
          
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;