import React from 'react';
import { Link } from 'react-router-dom';

import './wireframe.css';

//Image Imports
import wireframe1 from '../../assets/home-wireframe.png';
import wireframe2 from '../../assets/about-wireframe.png';
import wireframe3 from '../../assets/design-wireframe.png';
import wireframe4 from '../../assets/sub-wireframe.png';


function Wireframes() {
  return (
    <main className="wireframes-page">
        
      <header className="wireframes-header">
        <h1>Wireframes</h1>
      </header>
      <section className="wireframes-content">
        <article className="wireframe">
          <p>Surprisingly, the home page actually took me the longest to do. From many failed attempts to finally getting something right. I was hesistant on whether I wanted to add more content to the home page or not. Eventually I settled on keeping it simple, with a header and image which would symbolize the theme best. Followed by some descriptive text and boxes which would take users to the other pages. In keeping with my theme, I made sure to keep all images aviation and travel related. I also made sure to include descriptions on each box to provide clarity to what each page holds. This page has a simple flow, with the main header image and background taking up 50 of the viewing height and width. Users would then skim through each box, and choose whichever of them they would like to visit.</p>
          <figure>
            <img src={wireframe1} alt="Wireframe 1" />
            <figcaption>Home Page Wireframe</figcaption>
          </figure>
        </article>
        <article className="wireframe">
          <p>I knew that I wanted this page to feature my reasoning for choosing this theme, which would add abit of a personal touch, followed by some info or interactive elements which ties in with my theme. I personally do not like reading huge chunks of text, so I decided to add an image slider gallery. This gallery showcases images of some of the best commercial aircraft in the world. I did have plans to add in a 3D model of a jet engine which would be interactive, however, after issues with the deployment, I had to get rid of it. This page has a very simple flow, going from top to bottom.</p>
          <figure>
            <img src={wireframe2} alt="Wireframe 2" />
            <figcaption>About Page Wireframe</figcaption>
          </figure>
        </article>
        <article className="wireframe">
          <p>My design and theory pages both share the same design layout in the sense of a header container with an h1 text, above a background image. This is followed by cards/boxes below which will take users to my sub-pages to see my wireframes, styleguide and my theory content. I thought of adding in different layouts, but I also wished to maintain some consistency throughout my pages. Since I would be showing alot of info from these two pages, I thought that the boxes/cards would be best, as it would give an overview of what the info is about, and upon clicking, would take users to that sub-page.</p>
          <figure>
            <img src={wireframe3} alt="Wireframe 3" />
            <figcaption>Design and Theory Pages Wireframe</figcaption>
          </figure>
        </article>
        <article className="wireframe">
          <p>For the design and theory sub-pages, I chose to keep the design the simplest. There is alot of content to consume, so I did not want to distract users away from the content. The flow of these pages would be from top to bottom. I have also included a button at the bottom of the pages to direct users to the next or previous sub-pages. This would make it easier for them to navigate, instead of having to go to the main pages over and over. I also added in a background to the entire container so that the text would be easier to see and so that it doesn't clash with the background.</p>
          <figure>
            <img src={wireframe4} alt="Wireframe 4" />
            <figcaption>Design and Theory Sub-Pages Wireframe</figcaption>
          </figure>
        </article>
      </section>
      {/* Button to navigate to styleguide page */}
      <Link to="/design/styleguide" className="styleguide-button">STYLEGUIDE</Link>
    </main>
  );
}

export default Wireframes;
