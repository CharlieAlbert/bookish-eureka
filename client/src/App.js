import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Slider from './Components/slider';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
