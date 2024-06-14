import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './blogs.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Blog3() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])
  return (
    <main className="blog-page">
        
      <header className="blog-header" data-aos = "zoom-in">
        <h1>Blog-3</h1>
      </header>
     <section className='blog-content'>
     <article className="blog" data-aos = "zoom-in"> 
                    
                    <h2>The Web as a Medium for Art</h2>
                    <p>Using the web as a medium for art is a fascinating concept. When the internet first started, it was mainly used for sharing information. But now, it's a vibrant space for creativity and artistic expression. Artists have found innovative ways to use the web to create immersive and interactive experiences that wouldn't be possible with traditional mediums.</p>
                    <p>One thing I really appreciate about web-based art is its reach. Anyone with an internet connection can access it, making it far more inclusive than traditional art forms. This means that web-based art can reach a much wider audience, allowing for greater interaction and engagement. Imagine creating something in Johannesburg which could be viewed all over the world.

</p>
                    <p>However, using the web as a medium for art also comes with its challenges. It's hard to decide how much content to include and what to leave out. Sometimes, it feels like there are too many ideas and not enough time to explore them all. Coding everything, especially in JavaScript, can be tough, and my skills in JavaScript are still developing. This makes it challenging to bring some of my big ideas to life.

</p>
                    <p>Despite these challenges, I find web-based art incredibly exciting. It's a medium that's constantly evolving, and there's always something new to learn and explore. The possibilities are endless, and I can't wait to see how this field continues to grow and change in the future.





</p>
                            
                      
                        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/blog-2" className="blog-button">Previous</Link>
      <Link to="/theory/essay" className="blog-button">Next</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Blog3;