import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Slider from "./Components/slider";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails";


function App() {
  return (
    <div className="App">   
      <Navbar />
      <Hero />
      <Slider />
      <Contact />
      <Footer />
      {/* <UserDetails /> */}
    </div>
  );
}

export default App;
