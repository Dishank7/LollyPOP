import { useState,useEffect,useRef } from "react";
import TextSpinnerComponent from "./TextSpinnerComponent"
import tickImage  from "../images/tick image.svg"



const SpinnerComponent = () =>{
    
  const spinnerRef = useRef(null)

  useEffect(() => {
  
    const element = spinnerRef.current

    if(element) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              spinnerRef.current.classList.add('loaded');
              observer.unobserve(spinnerRef.current); // Stop observing after the first trigger
            }
          });
        },
        { threshold: 0.1 } // Trigger when at least 10% of the element is visible
      );
  
      observer.observe(spinnerRef.current);
  
      return () => {
        if (spinnerRef.current) {
          observer.unobserve(spinnerRef.current);
        }
      };
    }

  }, []);


    return(
        <div className="spinner-text-div" ref={spinnerRef}>
        <div className="industry-6">
           <h2>Learn what the industry requires in 6 months.</h2>
           <p>Get the basics right. Enter the industry with confidence.</p>
        </div>
        <div className="spinner-div" style={{position:"relative"}}>
             <TextSpinnerComponent/>  
            <div className="tick-div">
                <img src={tickImage}/>
            </div>
        </div>
      </div>
    )
}

export default SpinnerComponent