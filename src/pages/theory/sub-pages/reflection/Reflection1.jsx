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