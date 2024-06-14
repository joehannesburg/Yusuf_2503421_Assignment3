import React, {useEffect} from 'react';
import NetArt from '../../components/art/NetArt';
import ScrollTop from '../../components/scroll/ScrollTop';
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../art/art.css'
import Lottie from 'lottie-react';
import animationData from '../../assets/anim7.json';
import Clouds from '../../assets/clouds2.jpg'

function Art() {
  useEffect(()=> {
    Aos.init({duration: 3000});
}, [])
  return (

    <main 
    className="art-page">

<div className="overlay5"></div>
<img className='wingImg' src={Clouds} alt="clouds/jpg" data-aos = "fade-down" />


<section className="art-header"  >
        <h1>Net-Art</h1>
        
      </section>


 <section className="art-intro" data-aos = "fade-right">
 <article className='anim7'>
         <Lottie animationData={animationData}/>
         </article>
        
        <h2> Welcome to this web-based art piece, where your imagination takes flight! This interactive art project lets you transform a digital canvas into a lively, animated masterpiece. Whether you're doodling flight paths across a world map, sketching clouds and airplanes in the sky, or getting creative with a variety of other backgrounds, this art piece brings your drawings to life with a whimsical airplane animation. It's all about connecting people and ideas, making the world and the sky your canvas. Embrace the theme of aviation as you draw, dream, and watch your creations soar!
 
</h2>

<h3>Instructions:</h3>
<p> <span>Click and Drag to Draw:</span>  Use your mouse or touch device to click and drag on the canvas, sketching out whatever comes to mind.</p>
<p> <span>Animate:</span> Click on the "Animate" button to see your drawing come alive as a playful airplane traces your lines.</p>
 <p> <span>Change Background:</span> Click "Change Background" to switch up your canvas with different scenes, from world maps to skies full of possibilities.</p>
<p> <span>Undo:</span> Made a mistake or changed your mind? Click "Undo" to remove your last stroke.
</p>
 <p> <span>Reset:</span> Want to start over? Click "Reset" to clear the entire canvas and begin a new creation.




</p>

      </section>
 <section data-aos = "fade-right">
 <NetArt />
    </section>

<ScrollTop />

    </main>
     
    
     
   
  
   

  );
}

export default Art;