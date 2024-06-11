import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

import './styleguide.css';

//Image Imports
import Colour from '../../../../assets/colour.png';
import Inspo1 from '../../../../assets/inspiration1.jpeg';
import Inspo2 from '../../../../assets/inspiration2.jpeg';

import ScrollTop from '../../../../components/scroll/ScrollTop';


function Style() {
  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])

  return (
    <main className="styleguide-page">
        
      <header className="styleguides-header">
        <h1>StyleGuide</h1>
      </header>
      <section className="styleguides-content">
        <article className="styleguide" data-aos ="zoom-in">
        <h2>Theme and Inspiration</h2>
        <p>What's the deal with my website? Think of it as soaring through the sky, feeling that rush of adventure and freedom. I wanted to capture the thrill and wonder of aviation and make it a digital experience that's just as exciting.</p>
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Colour Palette</h2>
          <p>Primary Colours:</p>
          <p> - Sky Blue (#235998): This deep blue feels like the vast sky on a clear day. It's calming and full of energy, much like gazing out of an airplane window.</p>
          <p> - Ocean Blue (#00a2c9): This cool shade is inspired by sparkling waters below, adding a refreshing touch.</p>
          <p> - Sky Blue (#537db1): This shade blends perfectly with the existing blues, adding depth and variety to the palette, evoking the various tones of the sky.</p>

          <p>Accent Colours:</p>
          <p> - Cloud White (#FFFFFF): Clean and timeless, white brings clarity and openness, like a blank canvas ready for adventure.</p>
          <p> - Night Black (#000000):  Bold and striking, black adds depth and contrast.</p>
          <p> - Sky Light (#f1f7ff): This soft blue-gray hue is like moonlight on a clear night, adding tranquility and warmth.</p>
          <figure>
            <img src={Colour} alt="Colour Palette" />
            <figcaption>Colour Palette Image</figcaption>
          </figure>
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Typography</h2>
          <p>Heading Font:</p>
          <p>- Caveat: All headers are in the Caveat font, adding a personal and handwritten touch to the design!</p>
          <p>Body Font:</p>
          <p>- Roboto: Clean and friendly, Roboto makes reading easy and ensures you don't miss a beat as you explore the site.</p>
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Imagery</h2>
          <p>From stunning photos of aircraft to calming cloudscapes, every image is chosen to spark wonder and excitement. It's like having a window seat to the world of aviation right at your fingertips.</p>
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Layout and Structure</h2>
          <p>The site's layout is like a well-organized flight plan – it's smooth, efficient, and gets you where you need to go! Whether you're browsing on a big screen or a tiny phone, the responsive grid system ensures that everything looks and feels just right.</p>
          <p>Navigation:</p>
          <p>Navigation is the compass of the site! A fixed navbar at the top keeps main sections just a click away. Interactive buttons and cards are styled to match the aviation theme, making navigation easy and intuitive whether you're moving between pages or diving into sub-sections.

</p>
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Changes Made</h2>
          <p>Based on the feedback I received from my initial design of this web-app, these are the changes I have made:</p>
          <p> -Optimized all media to ensure quick loading times and a smoother user experience.
 </p>
          <p>-Added a loading page to enhance user experience during initial load times.
</p>
          <p>-Integrated animations throughout the entire website using the AOS library to make interactions more dynamic.</p>
          <p>-Added more white space to improve readability and aesthetics.
</p>
          <p>-Added more content to provide users with a richer experience.
</p>
          <p>-Ensured the theme carries consistently throughout the entire app to maintain a cohesive look and feel.
</p>
          <p>-Aligned large chunks of text to the left for better readability.
</p>
          <p>-Made the entire site fully responsive for all form factors, ensuring a seamless experience on any device.




</p>
        
        
        
        
        
        
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Strengths & Weaknesses</h2>
          <p>Strengths:</p>
          <p>One of the standout strengths of my web app is the consistency in design. I’ve ensured that the visual elements, color palette, and typography remain uniform throughout the site, creating a cohesive and polished look. This consistency helps in making the app feel professional and well-thought-out. Another strength is the simplicity combined with a touch of fun. The design is clean and straightforward, making it easy for users to navigate and find what they need. At the same time, I’ve added playful elements and animations to keep the experience engaging and enjoyable.

User-friendliness has been a top priority. I’ve focused on making the interface intuitive, with clear navigation and easily accessible features. This helps users to interact with the app without any confusion or frustration.

Navigation clarity is another strong point. The main sections are always just a click away, thanks to the fixed navbar and interactive elements that guide users smoothly through the app. This ensures that users can easily find their way around.

I’ve also made sure to highlight important information clearly. Key details and features stand out, so users can quickly identify what’s most relevant and interesting. This enhances the overall usability and effectiveness of the app.</p>          
       
       <p>Weaknesses:</p>
       <p>One of the challenges I faced was knowing how much content is too much or too little. Striking the right balance between providing enough information and not overwhelming the user is tricky. Sometimes, I struggled to gauge the right amount of content to include.

Another weakness was dealing with an overflow of ideas and inspirations. With so many potential directions to take, it was hard to pick and stick with one concept. This sometimes led to indecisiveness and a lack of focus in the design process.

Coding primarily in JavaScript was also tough. While I managed to get things done, the complexity of JavaScript presented a tough and time-consuming learning curve and some challenges along the way. This occasionally slowed down the development process.

Additionally, having big, fancy ideas but not being able to carry them out was a significant hurdle. There were times when my ambitions exceeded my technical capabilities, leading to compromises and unfinished features (that damn 3D model).</p>
       
       
        </article>
        <article className="styleguide" data-aos ="zoom-in">
          <h2>Inspiration</h2>
          <figure>
            <img src={Inspo1} alt="Inspiration Image 1" />
          </figure>
          <figure>
            <img src={Inspo2} alt="Inspiration Image 2" />
          </figure>
        </article>
      </section>
      {/* Button to navigate to styleguide page */}
      <Link to="/design/wireframes" className="wireframe-button">WIREFRAMES</Link>

        <ScrollTop />
    </main>
  );
}

export default Style;
