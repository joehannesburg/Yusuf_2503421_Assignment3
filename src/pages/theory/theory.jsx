import React from 'react';
import { Link } from 'react-router-dom';
import './theory.css'



//asset imports
import Wing from '../../assets/wings.jpg'
import essayImg from '../../assets/essay.jpg'
import reflImg from '../../assets/reflection.jpg'
import netImg from '../../assets/net-art.jpg'

import ScrollTop from '../../components/scroll/ScrollTop';



function Theory() {
    return (
<main className="theory-page">
<div className="overlay4"></div>
<img className='windowImg' src={Wing} alt="window/png" />

 <section className="theory-intro">
        <h1>Theory</h1>
        <p> Read my essay on net art, view my reflection on the creation of this website, and explore the preparatory work for my upcoming artwork.

</p>
      </section>
      
      <section className="theory-boxes">
    <Link to="/design/wireframes" className="theory-box">
        <img src={essayImg} alt="Essay" className="box-image" />
        <h2>Net Art Essay</h2>
        <p>Read through a thorough and investigative essay on net-art</p>
    </Link>
    <Link to="/design/styleguide" className="theory-box">
        <img src={reflImg} alt="Reflection" className="box-image" />
        <h2>Reflection On Creation of This Web-App</h2>
        <p>Gain an insight onto what the process was like of creating this web-app</p>
    </Link>
    <Link to="/design/styleguide" className="theory-box">
        <img src={netImg} alt="Net-Art" className="box-image" />
        <h2>Preparatory Work For Net-Art</h2>
        <p>Discover my plans for the future net-art</p>
    </Link>
    </section>
    
        <ScrollTop />
     
      </main>
    );
};

export default Theory ;