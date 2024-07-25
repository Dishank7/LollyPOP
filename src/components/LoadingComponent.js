
import Lottie from "lottie-react";
import animation from "../Loader.json"

const LoadingCompanent = () => {

    return (
        <div className="loading-container">
            <div className="gradient"></div>
            <Lottie
                animationData={animation}
                loop={true}
                style={{ height: '300px', width: '300px' }}
            />
            {/* <div className="loading-spinner"></div>
            <div className="loading-text">Loading...</div> */}
        </div>
    );
}

export default LoadingCompanent