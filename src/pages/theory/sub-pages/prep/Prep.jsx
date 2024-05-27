import React from 'react';
import { Link } from 'react-router-dom';

import './prep.css';

import ScrollTop from '../../../../components/scroll/ScrollTop';

import inspo3 from '../../../../assets/inspo3.jpeg';
import inspo4 from '../../../../assets/inspo4.jpeg';


function Prep() {
  return (
    <main className="prep-page">
        
      <header className="prep-header">
        <h1>Net-Art Preperation</h1>
      </header>
     <section className='prep-content'>
     <article className="prep"> 
                    
                    <h2>Getting Ready:
</h2>
                    <p>First off, I delved into some serious research. I scoped out existing flight tracking apps and visualizations to get a feel for how flight paths come to life on screen. Then, I went hunting for real-time flight data sources—I'm talking APIs, databases, you name it. </p>
                   <h2>Why Flight Tracking Paint?
</h2>
                    <p>Well, I've always been fascinated by the magic of flight. There's something awe-inspiring about those crisscrossing paths in the sky, each one telling its own story of adventure and exploration. With Flight Tracking Paint, I wanted to capture that wonder and let users become the artists of their own sky-high masterpieces. It's all about blending technology and art in a way that's interactive, immersive, and downright cool.

</p>
                      <h2>What's in Store:
</h2>
                    <p>Picture this: you're on the app, staring at a canvas that's just waiting to be transformed. With a click of your mouse, you start painting—only instead of paint, you're tracing out flight paths in vibrant colors. And the best part? You can watch those paths come to life, animating across the canvas like streaks of light in the night sky. It's a mesmerizing experience that's as captivating as it is creative.

</p>

                    <h2>Challenges Ahead:
</h2>
                    <p>Now, I won't lie—there are some hurdles to clear. We're talking about integrating real-time flight data, building a smooth and seamless canvas interface, and making sure everything runs like a dream across different browsers and devices. There's alot to test and figure out and I already anticipate running into issues, but hey, the fun is in figuring it out right? Right?</p>
                        </article>

                        <article className="prep">
          <h2>Inspiration:</h2>
          <figure>
            <img src={inspo3} alt="Inspiration Image 1" />
          </figure>
          <figure>
            <img src={inspo4} alt="Inspiration Image 2" />
          </figure>
        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/reflection" className="styleguide-button">Reflection</Link>
      <Link to="/theory/essay" className="styleguide-button">Net-Art Essay</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Prep;
