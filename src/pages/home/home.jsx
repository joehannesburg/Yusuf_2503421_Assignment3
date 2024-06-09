import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../assets/anim.json';
import data from '../../assets/anim3.json';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './home.css'

//asset imports
import video from '../../assets/clouds.mp4'
import img from '../../assets/test.png'
import aboutImg from '../../assets/about.png'; 
import designImg from '../../assets/design.png'; 
import theoryImg from '../../assets/theory.png'; 
import artImg from '../../assets/art.png';
import world from '../../assets/world.mp4';


//component imports
import ScrollTop from '../../components/scroll/ScrollTop';
import Slider from '../../components/slider/slider';


function Home() {
useEffect(()=> {
    Aos.init({duration: 3000});
}, [])


    return (
        
        <main className="home-page">
         <div className="overlay"></div>
         <video src={video} muted autoPlay loop type="video/mp4" data-aos = "fade-down"></video>

         <section className='homeContent container'>
         
         <img className='planeImg' src={img} alt="airplane/png"  />
         <Link to="/art" className="art-button">Explore Net-Art</Link>
         <article className='anim'>
         <Lottie animationData={animationData}/>
         </article>
        
        
       

         </section>

      
      <section className='info' data-aos = "fade-right" >
        <article className='anim2' >
        <Lottie animationData={data}/>
        </article>
      
        
<h1>Fly With Us! </h1>

<p className='welcomeTxt' >
        This web app is designed to bring the excitement and wonder of aviation and travel to your fingertips. Whether you're a travel enthusiast, an aviation geek, or someone looking to explore the world from the comfort of your screen, we’ve got something special for you. So fasten your seatbelts, put your seats in the upright position and get ready for a spectacular journey! 
</p>

    

<h2>Why Aviation?</h2>
<p className='welcomeTxt'>
Ever since I was a kid, I've been captivated by the world of aviation. Growing up, I traveled frequently and was always amazed by the experience of flying. My fascination deepened because my brother is a pilot, allowing me to gain a unique perspective on the intricacies of aviation. I love how planes connect people across the globe, creating unforgettable memories and adventures. Aviation isn't just about travel; it's about the connections we make and the experiences we share. This lifelong passion for flying and exploration inspired me to choose an aviation theme for my website. 
</p>
</section>


<section className='slider-section' data-aos = "fade-left" >
    <Slider/>
</section>

<section className='did-you-know' data-aos = "fade-right" >
    <article className='duk-content'>
        <video className='duk-video' src={world} loop autoPlay muted></video>
    <article className='duk-text'>
    <h3>Did You Know?</h3>
    <p> <span>✈️ 4.5 billion:</span> The number of passengers who traveled by air in 2023.</p>
<p><span>✈️ 40 million:</span> The number of commercial flights operated annually worldwide.</p>
<p className='p-end'><span>✈️ 9000 to 13000:</span> The number of flights in the air at any given moment.</p>
    </article>
    



</article>
</section>

{/* link boxes */}
<section className="link-boxes" data-aos = "zoom-out" >
    
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
        <p>Read my essay on net art, view my planning and blog posts and explore the preparatory work for the artwork.</p>
    </Link>
    <Link to="/art" className="link-box">
        <img src={artImg} alt="Art" className="box-image" />
        <h2>Art</h2>
        <p>Discover the art inspired by aviation.</p>
    </Link>
</section>
    
      

      <ScrollTop/>
    </main>

   


    );
}

export default Home;