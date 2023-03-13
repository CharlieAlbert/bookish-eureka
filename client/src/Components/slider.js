import React from "react";
import "./slider.css";
import { useInView } from "react-intersection-observer";
import imageSrc from "../Assets/startuphive2.jpg";

const Slider = ({title, subtitle, flipped }) => {
  var { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    if (flipped) {
      return (
        <>
          <img src={imageSrc} alt="startuphive" className="slider_image img-fluid" />
          <div className="slider_content">
            <h1 className="slider_title">Outsourcing</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider_content">
            <h1 className="slider_title">Networking</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="startuphive" className="slider_image" />
        </>
      );
    }
  };
  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};
export default Slider;
