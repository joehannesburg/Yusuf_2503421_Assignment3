import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './blogs.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Blog2() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])
  return (
    <main className="blog-page">
        
      <header className="blog-header" data-aos = "zoom-in">
        <h1>Blog-2</h1>
      </header>
     <section className='blog-content'>
     <article className="blog" data-aos = "zoom-in"> 
                    
                    <h2>Net Art and the Evolution of Web-Based Art</h2>
                    <p>Net art, or internet art, is a fascinating genre that uses the internet as a canvas for artistic expression. One of the aspects I love about net art is its accessibility. Unlike traditional art confined to galleries and museums, net art is available to anyone with an internet connection. This allows for a wider audience and more diverse participation.</p>
                    <p>Kyle McDonald’s “Exhausting a Crowd” is a standout example of net art and one of my favourite pieces of art. This interactive piece lets users annotate a live stream of public spaces. The audience becomes part of the artwork, contributing to its continuous evolution. This interaction is what makes net art so unique and engaging. I’ve always been fascinated and intrigued by being able to be part of an experience which allows me to interact and immerse myself into it. I much prefer this over just having to look at a static non-interactive artwork.</p>
                    <p>However, not all net art captures my interest. Some pieces feel too experimental or abstract, and it can be challenging to connect with them on a personal level. But when net art works, it can be incredibly powerful and thought-provoking. The nature of net art, where the audience actively participates, is something I find deeply fascinating. It’s a reminder of how the internet can transform the way we create and experience art, and it’s definitely something that I would like to be part of. </p>        
                      
                        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/blog-1" className="blog-button">Previous</Link>
      <Link to="/theory/blog-3" className="blog-button">Next</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Blog2;