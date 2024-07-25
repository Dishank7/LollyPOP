import { useState,useEffect } from "react";
import HomePage from "./components/HomePage";
import LoadingCompanent from "./components/LoadingComponent";

const App = () => {
  
 const [isLoading ,  setIsLoading] = useState(true);

 useEffect(()=>{

  setTimeout(() => {
    setIsLoading(false);
}, 5000);

 },[])

  return(
    <>
        {isLoading ? (
                <LoadingCompanent/>
            ) : (
                <div>
                    {/* Your main content goes here */}
                    <HomePage/>
                </div>
            )}
    </>
  )
  
}

export default App;
