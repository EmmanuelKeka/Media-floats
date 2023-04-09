import React, { useState,useRef,useEffect } from 'react';
import ImageSlider from "./ImageSlider"

export default function Services(){
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return(
            <section data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500"  className=" allsection h-[50rem] back--white text-center flex-row flex  justify-center ">
            <h1 className="para--font mr-9 mb-9 myBlackText text-7xl tracking-widest" style={{ transform: `translate(${0}px,${((offsetY * 0.2)-40)}px)` }}>Work </h1>
            <ImageSlider images={['/image/web11.png', '/image/web11.png', '/image/web11.png']} />

            </section>
    )
}