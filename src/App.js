import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/home/Home';
import About from './pages/about/About'

//Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <React.Fragment>
    <BrowserRouter basename="/Yusuf_2503421_Assignment3">
        <Navbar />
        <Routes>
          {/* Routing for pages */}
      
          <Route index element = {<Home/>}/>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          {/* <Route path="/design" element={<TicketPurchase />} />
          <Route path="/theory" element={<ConfirmationPage />} />
          <Route path="/art" element={<ConfirmationPage />} />  */}
          
        </Routes>
        </BrowserRouter>
        <Footer/>
    </React.Fragment>
  );
}

export default App;