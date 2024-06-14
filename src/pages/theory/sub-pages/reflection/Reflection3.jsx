import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './reflection2.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Reflection3() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])
  return (
    <main className="reflection-page">
        
      <header className="reflection-header" data-aos = "zoom-in">
        <h1>Reflection on Final Web-App Creation</h1>
      </header>
     <section className='reflection-content'>
     <article className="reflection" data-aos = "zoom-in"> 
                    
               <p>When I first saw the marks and results of my initial version, I was very disappointed. It became clear that I needed to make a lot of changes to improve it. This realization was both a setback and a turning point.</p>
               <p>I started by adding more content, changing the layout and flow of my pages, and making sure my web app stayed true to its theme. I focused on following all the technical requirements, like optimizing media, ensuring everything was responsive, and adhering to UI/UX principles. I made sure there was enough white space and that the text was easy to read.

</p>
               <p>One aspect that took me a long time to figure out was my net art. Initially, I felt it would have been better to integrate the net art into the entire site rather than having it as a standalone piece. However, considering my theme, the time constraints, and what I already had, it made the most sense to keep it as a standalone art. This decision was tough, but ultimately, it allowed me to focus on creating a more cohesive and polished piece.

</p>
               <p>There were many hurdles and challenges along the way. Despite adding content and restructuring my site, I still worried that it wasn't enough and that it didn’t fit the theme as well as it could. Doubts crept in, and I even considered restarting the entire project from scratch. But through many late nights and persistent effort, I managed to fix most, if not all, the issues I had previously faced.

</p>
               <p>One of the most challenging parts was ensuring the site was optimized and responsive. I spent hours tweaking the media and adjusting the layout to make sure everything looked good on different devices. Ensuring that the web app followed good UI/UX practices was another tough task. Balancing aesthetics with functionality required constant adjustments and refinements.

</p>
               <p>Despite these challenges, I can now say that my web app is much more neat and presentable. It is a reflection of my growth as a developer, combining creativity with technical skills. The process taught me a lot about perseverance and flexibility. Each obstacle helped me refine my vision and improve the final product.

</p>
               <p>Ultimately, creating this web app was like a flight—sometimes bumpy but ultimately fulfilling. You have to navigate through the storms and turbulence in order to get to the clear skies and smooth ride. It showcases my passion for aviation and my journey as a developer. I now feel much more experienced in React and web app development, and I'm proud of what I've achieved.





</p>
                        
                      
                        </article>
      
      </section>
      {/* Buttons to navigate to other page */}
      <section className='buttons'>
      <Link to="/theory/reflection-web-initial" className="refl-button">Previous</Link>
      <Link to="/theory/blog-1" className="refl-button">Next</Link>
      </section>
      

        <ScrollTop />
    </main>
  );
}

export default Reflection3;