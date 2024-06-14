import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './blogs.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Blog1() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])
  return (
    <main className="blog-page">
        
      <header className="blog-header" data-aos = "zoom-in">
        <h1>Blog-1</h1>
      </header>
     <section className='blog-content'>
     <article className="blog" data-aos = "zoom-in"> 
                    
                    <h2>Discovering the Power of React</h2>
                    <p>Learning React has been a huge step up in my web development journey. One thing that really stands out to me is the ability to break down the UI into reusable components. This component-based architecture is a game-changer because it promotes code reusability and makes the application easier to maintain. It's like having a well-organized toolbox where every tool has its specific place and purpose. Not having to re-write, or continuously copy and paste the same code through all my scripts really saves alot of time and energy.</p>
                    <p>A major realization I had was how many of the apps I use daily are built with React. Platforms like Netflix use React to create seamless and responsive user interfaces. Knowing this inspired me to dive deeper into React, understanding that I could build similar applications with the same technology.</p>
                      <p>However, as powerful as React is, it takes time to master. You need to be well-versed in JavaScript to use React effectively, and that's something I’m still working on. The complexity of JavaScript can make learning React feel like a steep climb at times. There have been moments(all the time) when I felt overwhelmed by JavaScript while trying to implement certain features in React.
</p>                 
<p>I am excited to continue practicing and mastering React, as I now realize the capabilities of React and what can be created through React. On that note though, I can’t help but look back at what we had done last year, and reflect on how much easier it was creating websites using plain HTML, CSS, and javascript as compared to making web apps with React.
</p>
                            
                            
                      
                        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/reflection-web-final" className="blog-button">Previous</Link>
      <Link to="/theory/blog-2" className="blog-button">Next</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Blog1;