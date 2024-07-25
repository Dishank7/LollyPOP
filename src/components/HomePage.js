import { useState,useEffect,useRef } from "react"

import academyImage from "../images/academy.svg"
import girlTagImage from "../images/girlimage.svg"
import boyTagImage from "../images/boyimage.svg"
import VideoPlayer from "./VideoPlayer"
import ImagesComponent from "./ImagesComponent"
import SpinnerComponent from "./SpinnerComponent"
import CousreTableComponent from "./CourseTableComponent"
import PDF from "../Syllabus.pdf"
import RegisterPage from "./RegisterPage"
import Footer from "./Footer"


const HomePage = () => {

//    const[register , setRegister] = useState(false);
const containerRef = useRef(null);
const uiuxRef = useRef(null)

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            uiuxRef.current.classList.add('loaded');
            observer.unobserve(uiuxRef.current); // Stop observing after the first trigger
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    observer.observe(uiuxRef.current);

    return () => {
      if (uiuxRef.current) {
        observer.unobserve(uiuxRef.current);
      }
    };
  }, []);

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF; // The path to the PDF file in the public directory
    link.download = 'syllabus.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return(
        <div className="main-div-home">
            <div className="gradient-div">
            <div className="home-gradient"></div>
            </div>
          
            <div className="logo-btn-nav">
                <img src={academyImage}/>
                <button onClick={openModal}>Register Now</button>
            </div>
            <RegisterPage isOpen={isModalOpen} onClose={closeModal}/>

            {/* <RegisterPage/> */}

            <div className="UI-UX-div">
              <h1>Learn UX UI Design from Industry experts</h1>
            </div>

            <div className="tag-text-div">
                <div className="first-image-div">
                     <b className="green-tag-text"> Doris Santhus</b>
                     <img src={girlTagImage}/>
                </div>
                <p>4 months learning program and 2 months of internship at India’s best design studio.</p>
                <div className="sec-image-div">
                <img src={boyTagImage}/>
                <b className="purple-tag-text"> Doris Santhus</b>
                </div>

            </div>

            <VideoPlayer/>

            <div className="UI-UX-div2" ref={uiuxRef}>
              <h2 >Learn from our designers who touched <span className="Billion"> Billion</span> lives.</h2>
            </div>

            {/* <div className="images-div" ref={containerRef}>
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
      </div> */}

      <ImagesComponent/>

      {/* <div className="spinner-text-div" ref={containerRef}>
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
      </div> */}

   <SpinnerComponent/>

      {/* <div className="course-table-div">
             <div className="table">
                 <span>MONTH 1</span>
                 <h4>Design Foundation</h4>
                 <p>Unlearn and relearn with focused attention on getting the fundamentals right.</p>
             </div>
             <div className="table">
                 <span>MONTH 2,3,4</span>
                 <h4>UX/UI Design</h4>
                 <p>Unlearn and relearn with focused attention on getting the fundamentals right.</p>
             </div>
             <div className="table">
                 <span>MONTH 5 & 6</span>
                 <h4>Internship <i style={{color:"red"}}>@Lollypop</i></h4>
                 <p>Unlearn and relearn with focused attention on getting the fundamentals right.</p>
             </div>
      </div> */}

      <CousreTableComponent/>

      
            
            <div className="download-btn-div">
            <button onClick={handleDownload}>Download Syllabus</button>
            </div>
            <Footer/>
        </div>
        
    )
}

export default HomePage 