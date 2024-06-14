import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../assets/anim6.json';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './catch.css'

//component imports
import ScrollTop from '../../components/scroll/ScrollTop';

function Catch() {
    //to use the AOS animations
useEffect(()=> {
    Aos.init({duration: 2000});
}, [])

return( 

<main className='catch-page'>

<section className='catch-page-container' data-aos = "zoom-in">
<article className='anim6'>
         <Lottie animationData={animationData}/>
         </article>
<article className='catch-text'>
<h1>404! Page Not Found</h1>
<h2>You Have Deviated Off Course. </h2>
<h2>Click On The Button Below To Be Redirected To The Home Page</h2>
<Link to="/" className="catch-button">Home</Link>

</article>



</section>








<ScrollTop/>
</main>


);

   

}



export default Catch;