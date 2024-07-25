import { useEffect } from "react";

const RegisterPage = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [isOpen]);
    
      if (!isOpen) {
        return null;
      }
    
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="model-header">
                    
                    <h2>Get in touch with us</h2>
                    <p>Get in touch with us to know more about the best opportunity awaiting for you.</p>
            </div>
            <button className="close-button" onClick={onClose}>X</button>
            <form>

                <div className="form-div">
                <label>
                Name:
                </label>
                <input type="text" name="name" required placeholder="Enter Your Name"/>
                 </div>

                 <div className="form-div">
                 <label>
                Email:
                </label>
                <input type="email" name="email" required placeholder="Enter Your Email"/>
                 </div>

                 <div className="form-div">
                 <label>
                Contact Number:
                </label>
                <input type="tel" name="contact" required placeholder="Enter Your Number"/>
            
                 </div>
              <button className="form-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
}

export default RegisterPage