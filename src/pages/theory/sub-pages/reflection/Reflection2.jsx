import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './reflection2.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Reflection2() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])
  return (
    <main className="reflection-page">
        
      <header className="reflection-header" data-aos = "zoom-in">
        <h1>Reflection on Initial Web-App Creation</h1>
      </header>
     <section className='reflection-content'>
     <article className="reflection" data-aos = "zoom-in"> 
                    
                    <p>Creating this web app has been quite a journey, filled with highs and lows, much like a real flight. When I started, I knew I wanted to make something related to aviation. The vastness of the sky, the thrill of takeoff, the elegance of airplanes – it all fascinates me. But turning that passion into a functional and engaging web app? That was a whole different challenge.

</p>
<p>At the beginning, I had this grand vision but no clear path on how to execute it. I wanted the website to capture the excitement and freedom of flying, but figuring out the right way to represent that digitally was tough. There were so many ideas floating around in my head, and narrowing them down to a cohesive project was harder than I thought.

</p>
<p>One of the biggest challenges I faced was with the 3D model. I spent hours – and I mean literally ten-hour marathons – trying to get it to work. I tried everything, adjusted every setting, and went through endless tutorials. Each time I thought I was close, something would go wrong. After about fifty attempts, I had to accept that it wasn’t going to happen. It was frustrating, to say the least. But sometimes, you have to let go of certain elements to move forward with the project as a whole.

</p>
<p>Then, there was the constant question of content. Do I have enough? Too much? Is it overwhelming or too sparse? Striking the right balance was a continuous struggle. I wanted the site to be informative and engaging without overwhelming the user. This meant constantly tweaking, adding, and removing content to find that sweet spot. It felt like walking a tightrope – one wrong move and the whole thing could fall apart.

</p>
<p>One of the most grueling parts of this process was deploying the website. I battled with it for hours on end, facing issue after issue. There were moments where nothing seemed to work, and I was stuck staring at a blank page or cryptic error messages. I spent countless late nights troubleshooting, tweaking configurations, and searching through forums. It was a rollercoaster of emotions – frustration, hope, despair, and finally, relief. Somehow, after all those hours, the website went from not working at all to fully functional. The most baffling part? I’m not even sure what fixed it in the end. It was like a switch flipped, and everything just clicked into place.

</p>
<p>Despite the setbacks, the process taught me a lot about perseverance and flexibility. Sometimes, things don’t work out the way you plan, and you have to adapt. The vision for the project evolved with each obstacle, becoming more refined and realistic. Each challenge, from the failed 3D model to the content balance and deployment struggles, helped shape the final product into something I'm proud of.

</p>
                       <p>In the end, creating this web app was like a flight itself – a bit turbulent at times, but ultimately rewarding. It’s a reflection of my passion for aviation and my growth as a developer, combining creativity with technical skills. This project is proof to the idea that persistence and adaptability are key, whether you’re soaring through the skies or coding late into the night.





</p>            
                        
                      
                        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/reflection-net-art" className="refl-button">Previous</Link>
      <Link to="/theory/reflection-web-final" className="refl-button">Next</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Reflection2;
