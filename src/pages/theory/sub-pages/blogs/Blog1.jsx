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
                    
                    <h2>Introduction:</h2>
                    <p>Kyle McDonald’s net artwork, “Exhausting a Crowd” is a prime example of the marvels,
capabilities, and affordances that net art provides through the medium of the internet. This
interactive artwork intersects technology and human experiences, providing viewers with a
thought-provoking, innovative, and exciting experience. In this essay, we will be diving
further into this net artwork, analyzing it and examining how this specific net artwork, along
with how net artwork in general employs the internet to create meaning, evoke emotions, and
engage with audiences.</p>
                   <h2>Internet/Web Art:</h2> 
                    <p>Upon reading the term, one would infer that net/web art is the art that is constructed and
portrayed through the internet. “Internet Art or Net Art: a form of art specifically conceived
through the internet, on the internet, and for the internet” (Ricci, 2020). According to Chatel,
network art was something that artists began exploring in the late 1970s (Chatel, 2019). The
web has been around for a long time now, and as the capabilities of the web improve, so too
do artists’ web art. Christou states that internet art is not just merely something created to
look nice, but rather, it is created and used to “explore issues relevant to all aspects of life”
(Christou, 2019). Art has often been used as a means of exploring issues and signifying and
conveying a message or meaning, and internet art is the same. The advantage that Internet art
has over normal contemporary, traditional art is that almost everyone who has access to the
internet would be able to access the internet artworks. It is not restricted or limited to fancy
museums and libraries, but rather just to the screen in front of you. Also, unlike traditional art
which is non-interactive, static, and confined to physical spaces such as museums, internet art
is interactive, dynamic, fun, and widely accessible to anyone with an internet connection.
Another characteristic and what some would term an advantage of Internet Art over
traditional art is the fact that some Internet art pieces are continuously evolving and ever-
changing based on the input/interaction of the viewers. “Exhausting a Crowd” is an example
of this, as it is continuously changing based on the inputs of the users.</p>
                                       
                            <h2>References:</h2>
                            <p>Burke, C. (2018). THE INTERNET AS A NETWORK AND PLATFORM FOR ART IN THE
PUBLIC SPHERE. [online] Available at: https://digicult.it/articles/web/internet-come-network-e-
piattaforma-per-larte-nella-sfera-pubblica/ [Accessed 26 Apr. 2024].</p>
                            <p>Chatel, M. (2019). Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the
Internet. [online] Available at: https://medium.com/danae/net-art-post-internet-art-new-aesthetics-the-
fundamentals-of-art-on-the-internet-55dcbd9d6a5 [Accessed 26 Apr. 2024].</p>
                            
                      
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