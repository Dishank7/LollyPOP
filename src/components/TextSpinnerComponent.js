

const TextSpinnerComponent = () =>{


    return (
        <div className="spinner-container">
          <svg width="100" height="100" viewBox="0 0 200 200">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text fill=" darksalmon" fontSize="30">
              <textPath xlinkHref="#circlePath">
                &nbsp; L E A R N &nbsp;&nbsp; B Y &nbsp;&nbsp; U N L E A R N I N G .
              </textPath>
            </text>
          </svg>
        </div>
      );
    
}

export default TextSpinnerComponent;