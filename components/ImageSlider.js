import React, { useState,useRef,useEffect } from 'react';
import {motion} from "framer-motion"

const ImageSlider = () => {
  const [width,setWidth] = useState(0);
  const carousel = useRef();
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className="inner-carousel">

        <motion.div className="item flex flex-col justify-center items-center">
        <img className=" w-[50%]"  src='/image/web11.png' alt="emma"  style={{ transform: `translate(${((offsetY * 0.2)-330)}px,-${0}px)` }}/>
        <button class="btn btn-background-slide w-[10rem] h-[3rem] mt-9 para--font">View</button>
        </motion.div>
        <motion.div className="item flex flex-col justify-center items-center">
        <img className=" w-[50%]"   src='/image/web22.png' alt="emma"  style={{ transform: `translate(${((offsetY * 0.2)-330)}px,-${0}px)` }}/>
        <button class="btn btn-background-slide w-[10rem] h-[3rem] mt-9 para--font">View</button>
        </motion.div>
        <motion.div className="item flex flex-col justify-center items-center">
        <img className=" w-[50%]"   src='/image/web33.png' alt="emma"  style={{ transform: `translate(${((offsetY * 0.2)-330)}px,-${0}px)` }}/>
        <button class="btn btn-background-slide w-[10rem] h-[3rem] mt-9 para--font">View</button>
        </motion.div>

        
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;