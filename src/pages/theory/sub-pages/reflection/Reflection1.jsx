import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './reflection2.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Reflection1() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])
  return (
    <main className="reflection-page">
        
      <header className="reflection-header" data-aos = "zoom-in">
        <h1>Reflection on Net-Art</h1>
      </header>
     <section className='reflection-content'>
     <article className="reflection" data-aos = "zoom-in"> 
                    
                    <p>Planning, creating, testing and deploying this net-art was one heck of a process. I found inspiration from various online tutorials and examples, which helped shape my ideas and get started.

</p>
                    <p>My first idea was to use an API to draw or animate flight paths across the screen with a button click, creating a unique painting. However, I quickly realized that free APIs had limits on the number of calls I could make. Additionally, animating flight paths using coordinates was really hard. This challenge made me rethink my plan.

</p>
                    <p>Next, I tried making a paper plane game where users could launch planes across the screen. Unfortunately, it had many bugs and used a lot of data because of constant re-renders. This was frustrating, but it led me to a new direction.

</p>
                    <p>I decided to keep the painting theme and give users a canvas to paint on. To keep with my theme, I wanted to animate the painting with a plane flying over it, leaving contrails. This idea combined my love for dynamic visual art with an interactive element.

</p>
                    <p>After watching many tutorials and videos, I managed to put together a working version. However, it needed a lot of tweaking to fix issues. For example, the strokes weren't showing on the canvas when resized, and the plane animation wasn't appearing where it should. To fix this, I had to adjust the offsets and canvas dimensions functions, as well as the movePlane function.

</p>
                    <p>While I'm happy with the final result, I still think about what more I could have added to make it even better. I wanted to let users change the stroke color and width, but I ran out of time. Also, I wanted the plane to rotate in the direction of the lines, but I couldn't get it to work properly.

</p>
                    <p>In conclusion, this project has been a big learning experience. Despite the challenges and changes, I'm proud of what I created. The net art piece, with its interactive canvas and animated plane, reflects my initial vision and the development process. There's always room for improvement, and I look forward to adding more features and creativity to my future projects.





</p>
                        
                      
                        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/prep" className="refl-button">Previous</Link>
      <Link to="/theory/reflection-web-initial" className="refl-button">Next</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Reflection1;