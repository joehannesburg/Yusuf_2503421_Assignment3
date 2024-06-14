import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './theory.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react';
import animationData from '../../assets/anim5.json';


//asset imports
import Wing from '../../assets/wings.jpg'
import essayImg from '../../assets/essay.png'
import reflImg from '../../assets/reflection.png'
import reflImg2 from '../../assets/reflection1.png'
import netImg from '../../assets/net-art.png'
import netImg2 from '../../assets/net-art1.png'
import netImg3 from '../../assets/net-art2.png'
import blogImg from '../../assets/blog.png'
import blogImg2 from '../../assets/blog1.png'
import blogImg3 from '../../assets/blog2.png'
import world from '../../assets/world3.mp4';


import ScrollTop from '../../components/scroll/ScrollTop';



function Theory() {
    useEffect(()=> {
        Aos.init({duration: 3000});
    }, [])
    
    return (
<main className="theory-page">
<div className="overlay4"></div>
<img className='wingImg' src={Wing} alt="wing/png" data-aos = "fade-down" />


<section className="theory-header"  >
        <h1>THEORY</h1>
        
      </section>


 <section className="theory-intro" data-aos = "fade-right">
 <article className='anim4'>
         <Lottie animationData={animationData}/>
         </article>
        
        <p> Read my essay on net art, view my reflections on the creation of this website and net-art, and explore my blog posts.

</p>
      </section>
      
      <section className="theory-boxes" data-aos = "fade-left">
    <Link to="/theory/essay" className="theory-box">
        <img src={essayImg} alt="Essay" className="box-image" />
        <h2>Net Art Essay</h2>
        <p>Read through a thorough and investigative essay on net-art</p>
    </Link>
    <Link to="/theory/prep" className="theory-box">
        <img src={netImg2} alt="Net-Art" className="box-image" />
        <h2>Preparatory Work For Net-Art</h2>
        <p>Discover my plans for the future net-art</p>
    </Link>
    
    <Link to="/theory/reflection-net-art" className="theory-box">
        <img src={netImg3} alt="Net-Art" className="box-image" />
        <h2>Reflection On Net-Art </h2>
        <p>Gain an insight onto what the process was like of creating the net-art</p>
    </Link>
    <Link to="/theory/reflection-web-initial" className="theory-box">
        <img src={reflImg} alt="Reflection" className="box-image" />
        <h2>Reflection On Creation of This Web-App</h2>
        <p>Gain an insight onto what the process was like of creating this web-app</p>
    </Link>
    <Link to="/theory/reflection-web-final" className="theory-box">
        <img src={reflImg2} alt="Net-Art" className="box-image" />
        <h2>Final Reflection On Creation of This Web-App </h2>
        <p>Gain an insight onto what the process was like of improving this web-app</p>
    </Link>
    
    <Link to="/theory/blog-1" className="theory-box">
        <img src={blogImg} alt="Net-Art" className="box-image" />
        <h2>Blog-1 </h2>
        <p>Read through a short blog post on discovering the power of React</p>
    </Link>
    <Link to="/theory/blog-2" className="theory-box">
        <img src={blogImg2} alt="Net-Art" className="box-image" />
        <h2>Blog-2 </h2>
        <p>Read through a short blog post on net-art and the evolution of web-based art</p>
    </Link>
    <Link to="/theory/blog-3" className="theory-box">
        <img src={blogImg3} alt="Net-Art" className="box-image" />
        <h2>Blog-3 </h2>
        <p>Read through a short blog post on the web as a medium for art</p>
    </Link>
    </section>

    <section className='did-you-know3' data-aos = "fade-right" >
    <article className='duk-content3'>
        <video className='duk-video3' src={world} loop autoPlay muted></video>
    <article className='duk-text3'>
    <h3>Did You Know?</h3>
    <p> <span>✈️ Safest Travel Mode:</span> Air travel is statistically the safest mode of transportation, with the odds of being in a plane crash at about 1 in 11 million.</p>
<p><span>✈️ Record Number of Flights:</span> The busiest day in aviation history was July 24, 2019, with more than 225,000 flights tracked globally in a single day.</p>
<p className='p-end'><span>✈️ Global Flight Network:</span>  The global flight network is so extensive that, on average, around 100,000 flights take off and land around the world every day.</p>
    </article>
    



</article>
</section>
    
        <ScrollTop />
     
      </main>
    );
};

export default Theory ;