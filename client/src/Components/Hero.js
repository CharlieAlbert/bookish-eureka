import React from "react";
import "./Hero.css";
import HeroImage from '../Assets/startuphive4.jpg'


const Hero =() =>{
    return (
    <div
        className ="Hero">
        <img src={HeroImage} alt="StartUpHive" className="Hero_image img-fluid"/>
        <h1 className ="hero_title">STARTUPHIVE</h1>
        <h4 className ="hero_title2">Development made easy.</h4>
        
    </div>
    );
};
export default Hero;
