import React from 'react';
import './art.css'

//asset imports
import background from '../../assets/art.jpg'

function Art() {
    return (
        <main className="art-page">
        <div className="overlay6"></div>
        <img className='artImg' src={background} alt="window/png" />

        <section className="art-intro">
        <h1>Coming Soon!</h1>
        
      </section>
        </main>
    );
};

export default Art;