import React from 'react';
import './about.css'
import Slider from '../../components/slider/slider';
// import Engine from '../../components/3d/engineModel'


//asset imports
import img from '../../assets/clouds.jpg'


import ScrollTop from '../../components/scroll/ScrollTop';


function About() {
    return (
<main className="about-page">
<div className="overlay2"></div>
<img className='cloudImg' src={img} alt="cloud/png" />

 <section className="intro">
        <h1>Why Aviation?</h1>
        <p>Ever since I was a kid, I've been captivated by the world of aviation. Growing up, I traveled frequently and was always amazed by the experience of flying. My fascination deepened because my brother is a pilot, allowing me to gain a unique perspective on the intricacies of aviation. I love how planes connect people across the globe, creating unforgettable memories and adventures. Aviation isn't just about travel; it's about the connections we make and the experiences we share. This lifelong passion for flying and exploration inspired me to choose an aviation theme for my website.

</p>
      </section>
      
      <Slider/>
     
    
        <ScrollTop/>
     
      </main>
    );
};

export default About ;