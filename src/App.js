import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/home/Home';
import Design from './pages/design/Design'
import Wireframe from './pages/design/sub-pages/wireframes/Wireframe'
import Style from './pages/design/sub-pages/styleguide/Style'
import Theory from './pages/theory/Theory'
import Essay from './pages/theory/sub-pages/essay/Essay'
import Reflection1 from './pages/theory/sub-pages/reflection/Reflection1'
import Reflection2 from './pages/theory/sub-pages/reflection/Reflection2'
import Reflection3 from './pages/theory/sub-pages/reflection/Reflection3'
import Prep from './pages/theory/sub-pages/prep/Prep';
import Blog1 from './pages/theory/sub-pages/blogs/Blog1';
import Blog2 from './pages/theory/sub-pages/blogs/Blog2';
import Blog3 from './pages/theory/sub-pages/blogs/Blog3';



import Art from './pages/art/Art'

//Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import Load from './components/loadingscreen/Load';



function App() {
  //sets loading page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  return (
    <React.Fragment>
    <HashRouter basename="/">
        
        {loading ? (
          <Load />
        ) : (
          <>
          <Navbar />
        <Routes>
          {/* Routing for main pages */}
    
          <Route path="/" element={<Home/>} />
           <Route path="/design" element={<Design />} />
          <Route path="/theory" element={<Theory/>} />
          <Route path="/art" element={<Art/>} />  

          {/* Routing for sub-pages */}
          
          <Route path="/design/wireframes" element={<Wireframe />} />
          <Route path="/design/styleguide" element={<Style />} />
          <Route path="/theory/essay" element={<Essay />} />
          <Route path="/theory/reflection-net-art" element={<Reflection1 />} />
          <Route path="/theory/reflection-web-initial" element={<Reflection2 />} />
          <Route path="/theory/reflection-web-final" element={<Reflection3 />} />
          <Route path="/theory/prep" element={<Prep />} />
          <Route path="/theory/blog-1" element={<Blog1 />} />
          <Route path="/theory/blog-2" element={<Blog2 />} />
          <Route path="/theory/blog-3" element={<Blog3 />} />


        </Routes>
        <Footer/>
      
        
        </>
        )}
        </HashRouter>
    </React.Fragment>
  );
}

export default App;