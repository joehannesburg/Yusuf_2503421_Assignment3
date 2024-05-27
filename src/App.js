import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/home/Home';
import About from './pages/about/About'

//Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <React.Fragment>
    <HashRouter basename="/">
        <Navbar />
        <Routes>
          {/* Routing for pages */}
      
          {/* <Route index element = {<Home/>}/> */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/design" element={<TicketPurchase />} />
          <Route path="/theory" element={<ConfirmationPage />} />
          <Route path="/art" element={<ConfirmationPage />} />  */}
          
        </Routes>
      </HashRouter>
        <Footer/>
    </React.Fragment>
  );
}

export default App;