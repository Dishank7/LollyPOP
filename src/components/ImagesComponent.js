import { useState,useEffect,useRef } from 'react'

import Image1 from '../images/img1.png'
import Images1 from '../images/imgs1.png'
import Images2 from '../images/imgs2.png'
import Images3 from '../images/img3.png'
import Images4 from '../images/imgs4.png'

const ImagesComponent = () =>{

    const imgRef = useRef(null);

    useEffect(() => {

      const element = imgRef.current

      if(element){
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                imgRef.current.classList.add('loaded');
                observer.unobserve(imgRef.current); // Stop observing after the first trigger
              }
            });
          },
          { threshold: 0.1 } // Trigger when at least 10% of the element is visible
        );
    
        observer.observe(imgRef.current);
    
        return () => {
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        };
      }
       
      }, []);

    return(
        <div className="images-div" ref={imgRef} >
            <div style={{alignSelf:"baseline"}}>
                <img src={Images1} className="small-img"/>
            </div>
            <div style={{alignSelf:"end"}}>
                <img src={Images2} className="small-img"/>
            </div>
            <div>
                <img src={Image1} className="big-img"/>
            </div>
            <div style={{alignSelf:"stretch"}}>
                <img src={Images3} className="small-img"/>
            </div>
            <div style={{alignSelf:"end"}}>
                <img src={Images4} className="small-img"/>
            </div>
      </div>
    )
}

export default ImagesComponent