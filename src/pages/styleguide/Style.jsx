import React from 'react';
import { Link } from 'react-router-dom';

import './styleguide.css';

//Image Imports
import Colour from '../../assets/colour.png';
import Inspo1 from '../../assets/inspiration1.jpeg';
import Inspo2 from '../../assets/inspiration2.jpeg';

function Style() {
  return (
    <main className="styleguide-page">
        
      <header className="styleguides-header">
        <h1>StyleGuide</h1>
      </header>
      <section className="styleguides-content">
        <article className="styleguide">
        <h2>Theme and Inspiration:</h2>
          <p>So, what's the deal with my website? Well, imagine soaring through the endless blue sky, feeling the rush of adventure and freedom. That's the vibe I'm going for! I wanted to capture the excitement and wonder of aviation and translate it into a digital experience that's as thrilling as taking flight.</p>
        </article>
        <article className="styleguide">
          <h2>Colour Palette:</h2>
          <p>Primary Colours</p>
          <p> - Sky Blue (#235998): This rich, deep blue is like the vast expanse of the sky on a clear day. It's calming, yet full of energy, just like the feeling of looking out the window of an airplane.</p>
          <p> - Ocean Blue (#00a2c9): Inspired by the sparkling waters below, this shade of blue adds a refreshing touch of coolness to the palette, reminding you of the endless possibilities that lie ahead.</p>
          <p>Accent Colours</p>
          <p> - Cloud White (#FFFFFF): Clean, crisp, and timeless, white brings a sense of clarity and openness to the design. It's like a blank canvas, ready to be filled with adventure!</p>
          <p> - Night Black (#000000): Bold and striking, black adds depth and contrast to the interface, grounding it in sophistication and elegance.</p>
          <p> - Sky Light (#f1f7ff): This soft, subtle blue-gray hue is like the gentle glow of moonlight on a clear night, infusing the design with a touch of tranquility and warmth.</p>
          <figure>
            <img src={Colour} alt="Colour Palette" />
            <figcaption>Colour Palette Image</figcaption>
          </figure>
        </article>
        <article className="styleguide">
          <h2>Typography:</h2>
          <p>Heading Font</p>
          <p>- Montserrat: Say hello to Montserrat! With its sleek lines and modern vibe, Montserrat is the perfect font to headline our adventure. It's bold, it's beautiful, and it's ready to take you to new heights!</p>
          <p>Body Font</p>
          <p>- Roboto: Meet Roboto – your new best friend for reading on the web! With its clean, friendly appearance and easy readability, Roboto makes sure you never miss a beat as you explore the site.</p>
        </article>
        <article className="styleguide">
          <h2>Imagery:</h2>
          <p>From breathtaking photos of soaring aircraft to calming and dreamy videos and photos of the clouds, every image on the site is handpicked to spark your sense of wonder and excitement. It's like having a window seat to the world of aviation, right at your fingertips!</p>
        </article>
        <article className="styleguide">
          <h2>Layout and Structure:</h2>
          <p>The site's layout is like a well-organized flight plan – it's smooth, efficient, and gets you where you need to go! Whether you're browsing on a big screen or a tiny phone, the responsive grid system ensures that everything looks and feels just right.</p>
          <p>Navigation</p>
          <p>Ah, navigation – the compass of the web! At the top, you'll find a fixed navbar that keeps the main sections just a click away, no matter where you are on the page. This helps in maintaining a smooth flow as you explore the content. Additionally, I’ve added interactive buttons and cards throughout the site. These elements are not just functional but also styled to be engaging and in line with the aviation theme. Whether you’re moving between pages or diving into a sub-section, the navigation ensures you can do so effortlessly and intuitively.</p>
        </article>
        <article className="styleguide">
          <h2>Inspiration:</h2>
          <figure>
            <img src={Inspo1} alt="Inspiration Image 1" />
          </figure>
          <figure>
            <img src={Inspo2} alt="Inspiration Image 2" />
          </figure>
        </article>
      </section>
      {/* Button to navigate to styleguide page */}
      <Link to="/design/wireframes" className="styleguide-button">WIREFRAMES</Link>
    </main>
  );
}

export default Style;
