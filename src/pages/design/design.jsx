import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './design.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react';
import animationData from '../../assets/anim4.json';

import ScrollTop from '../../components/scroll/ScrollTop';


//asset imports
import img from '../../assets/window.jpg'
import wireframeImg from '../../assets/wireframes.jpg'
import styleImg from '../../assets/styleguide.jpg'
import world from '../../assets/world2.mp4';


function Design() {

    useEffect(()=> {
        Aos.init({duration: 3000});
    }, [])
    
    return (
<main className="design-page">
<div className="overlay3"></div>
<img className='windowImg' src={img} alt="window/png" data-aos = "fade-down"  />

 <section className="design-header"  >
        <h1>DESIGN</h1>
        
      </section>
      
    

        <section className="design-intro" data-aos = "fade-right" >
        <article className='anim3'>
         <Lottie animationData={animationData}/>
         </article>
        <p> Explore my design decisions and wireframes and see the planning and inspiration for this website.

</p>
        </section>

       
      <section className="design-boxes" data-aos = "fade-left">
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

    <section className='did-you-know2' data-aos = "fade-right" >
    <article className='duk-content2'>
        <video className='duk-video2' src={world} loop autoPlay muted></video>
    <article className='duk-text2'>
    <h3>Did You Know?</h3>
    <p> <span>✈️ Largest Passenger Plane:</span> The Airbus A380 can carry up to 853 passengers in an all-economy class configuration.</p>
<p><span>✈️ Frequent Flyer:</span> Some Boeing 747s have logged over 150,000 flight hours, making them the most flown aircraft model.</p>
<p className='p-end'><span>✈️ Longest Non-Stop Flight:</span>  The longest non-stop commercial flight is from Singapore to New York, covering about 9,534 miles and taking around 18 hours.</p>
    </article>
    



</article>
</section>
    
        <ScrollTop />
     
      </main>
    );
};

export default Design ;