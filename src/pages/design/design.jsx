import React from 'react';
import { Link } from 'react-router-dom';
import './design.css'



//asset imports
import img from '../../assets/window.jpg'
import wireframeImg from '../../assets/wireframes.jpg'
import styleImg from '../../assets/styleguide.jpg'

function Design() {
    return (
<main className="design-page">
<div className="overlay3"></div>
<img className='windowImg' src={img} alt="window/png" />

 <section className="design-intro">
        <h1>Design</h1>
        <p> Explore my design decisions and wireframes and see the planning and inspiration for this website.

</p>
      </section>
      
      <section className="design-boxes">
    <Link to="/design/wireframes" className="design-box">
        <img src={wireframeImg} alt="About" className="box-image" />
        <h2>Wireframes</h2>
        <p>Have a look at the wireframes of the website.</p>
    </Link>
    <Link to="/design/styleguide" className="design-box">
        <img src={styleImg} alt="Design" className="box-image" />
        <h2>Styleguide</h2>
        <p>Gaze at the style guide and design decisions used in creating this website.</p>
    </Link>
    </section>
    

     
      </main>
    );
};

export default Design ;