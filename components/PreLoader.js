import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome,</span>
        <span>to,</span>
        <span>Media Floats.</span>
      </div>
    </div>
  );
};

export default PreLoader;
