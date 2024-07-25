import { useState,useEffect,useRef } from "react"


const CousreTableComponent = () =>{
  
  const ctRef = useRef(null);

  useEffect(() => {
  
    const element = ctRef.current

    if(element){
        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  ctRef.current.classList.add('loaded');
                  observer.unobserve(ctRef.current); // Stop observing after the first trigger
                }
              });
            },
            { threshold: 0.1 } // Trigger when at least 10% of the element is visible
          );
      
          observer.observe(ctRef.current);
      
          return () => {
            if (ctRef.current) {
              observer.unobserve(ctRef.current);
            }
          };
    }
  }, []);

    return(
        <div className="course-table-div" ref={ctRef}>
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
      </div>
    )
}

export default CousreTableComponent