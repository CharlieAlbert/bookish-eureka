import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

//components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Slider from "./Components/slider";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import ChatRoom from "./Components/ChatRoom";

firebase.initializeApp({
  apiKey: "AIzaSyArQlnvCWWPtw2BTyMf1BjwSzcQ0VykISs",
  authDomain: "superchat-9e863.firebaseapp.com",
  projectId: "superchat-9e863",
  storageBucket: "superchat-9e863.appspot.com",
  messagingSenderId: "355193225292",
  appId: "1:355193225292:web:1dec26b9740e5c052074e9",
  measurementId: "G-8PHGK8WG0J"
})

function App() {
  return (
    <div className="App">
      <ChatRoom />
      {/* <Navbar />
      <Hero />
      <Slider />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
