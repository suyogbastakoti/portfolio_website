import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";

function App(){
  return(
    <>

    {/* Nav Section */}
    <Navbar />
    
    {/* Hero Section */}
    <Hero />

    {/* Projects Section */}
    <Projects />

    {/* Testimonials Section*/}
    <Testimonials />

    {/* Contact Section */}
    <Contact />
    
    {/* Footer Section */}
    <Footer />

    </>
  );

};

export default App;