import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

//asset imports
import video from '../../assets/clouds.mp4'
import img from '../../assets/test.png'
import aboutImg from '../../assets/about.png'; // Ensure the correct path to your image
import designImg from '../../assets/design.png'; // Ensure the correct path to your image
import theoryImg from '../../assets/theory.png'; // Ensure the correct path to your image
import artImg from '../../assets/art.png';

function Home() {
    return (
        
        <main className="home-page">
         <div className="overlay"></div>
         <video src={video} muted autoPlay loop type="video/mp4"></video>

         <section className='homeContent container'>
         {/* <BoardingPass /> */}
         <img className='planeImg' src={img} alt="airplane/png" />
         <h1 className='welcomeTxt'>Prepare for takeoff as we soar through the clouds of creativity and innovation. This site is your runway to explore the intricate designs, theoretical insights, and artistic inspirations behind my net art project, all fueled by the wonders of aviation. Buckle up and join me on this high-flying adventure!

</h1>
       

         </section>

      
<section className="link-boxes">
    <Link to="/about" className="link-box">
        <img src={aboutImg} alt="About" className="box-image" />
        <h2>About</h2>
        <p>Discover the inspiration behind this aviation-themed website and explore more airplane-related content.</p>
    </Link>
    <Link to="/design" className="link-box">
        <img src={designImg} alt="Design" className="box-image" />
        <h2>Design</h2>
        <p>Take a look at my wireframes and design decisions for creating this website.</p>
    </Link>
    <Link to="/theory" className="link-box">
        <img src={theoryImg} alt="Theory" className="box-image" />
        <h2>Theory</h2>
        <p>Read my essay on net art, view my planning, and explore the preparatory work for upcoming artwork.</p>
    </Link>
    <Link to="/art" className="link-box">
        <img src={artImg} alt="Art" className="box-image" />
        <h2>Art</h2>
        <p>Discover the art inspired by aviation.</p>
    </Link>
</section>
    
      
    </main>

   


    );
}

export default Home;