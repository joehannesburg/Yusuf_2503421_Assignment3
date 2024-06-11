import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './wireframe.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

//Image Imports
import wireframe1 from '../../../../assets/home-wireframe.png';
import wireframe3 from '../../../../assets/design-wireframe.png';
import wireframe4 from '../../../../assets/sub-wireframe.png';

import ScrollTop from '../../../../components/scroll/ScrollTop';



function Wireframes() {

  useEffect(()=> {
    Aos.init({duration: 2000});
}, [])

  return (
    <main className="wireframes-page">
        
      <header className="wireframes-header" data-aos = "zoom-in">
        <h1>Wireframes</h1>
      </header>
      <section className="wireframes-content">
        <article className="wireframe" data-aos = "zoom-in">
          <h2>Home Page</h2>
          <p>Reworking the homepage actually took quite a bit of time. Initially, it was a struggle with many failed attempts before I finally got it right. I was hesitant about whether to add more content or keep it simple. This time, I decided to go all in and add more content to make the homepage more engaging and give viewers a broader sense of my theme and web app.

To spice things up, I incorporated animations and added a button below the header image as a call-to-action. The new layout still starts with a header and image that symbolize the theme, but now it includes more descriptive text and interactive elements. I kept all images aviation and travel-related to stay true to the theme. Users can easily navigate through the additional content, and the new call-to-action button enhances the user experience, guiding them smoothly to the other sections of the site.</p>
          <figure>
            <img src={wireframe1} alt="Wireframe 1" />
            <figcaption>Home Page Wireframe</figcaption>
          </figure>
        </article>
        
        <article className="wireframe" data-aos = "zoom-in">
        <h2>Design & Theory Pages</h2>
          <p>In my updated version of the web app, these pages mostly stayed the same, with the exception of adding an animated svg below the header and some additional content below the boxes. I also moved the description text, which was below the header, to a new section and removed the background from it to make it more easily visible.

My design and theory pages still share the same design layout, featuring a header container with an h1 text above a background image. Below this are the cards/boxes that direct users to my sub-pages for wireframes, the style guide, and theory content. While I considered different layouts, I decided to maintain consistency across my pages. Given the amount of information on these two pages, I felt that the boxes/cards were the best option. They provide an overview of the content and, upon clicking, take users to the relevant sub-page.</p>
          <figure>
            <img src={wireframe3} alt="Wireframe 3" />
            <figcaption>Design and Theory Pages Wireframe</figcaption>
          </figure>
        </article>
        <article className="wireframe" data-aos = "zoom-in">
          <h2>Design & Theory Sub-Pages</h2>
          <p>
In my updated version, I made the width of the text container bigger for better readability. I also aligned the text to the left instead of center. Additionally, I incorporated scroll animations to enhance the user experience.

For the design and theory sub-pages, I kept the design simple to avoid distracting users from the content. The flow of these pages is from top to bottom. I included a button at the bottom to direct users to the next or previous sub-pages, making navigation easier without returning to the main pages. To improve readability, I added a background to the entire container so the text is more visible and doesn't clash with the background.</p>
          <figure>
            <img src={wireframe4} alt="Wireframe 4" />
            <figcaption>Design and Theory Sub-Pages Wireframe</figcaption>
          </figure>
        </article>
      </section>
      {/* Button to navigate to styleguide page */}
      <Link to="/design/styleguide" className="styleguide-button">STYLEGUIDE</Link>

      <ScrollTop/>
    </main>
  );
}

export default Wireframes;
