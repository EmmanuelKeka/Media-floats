import Image from "next/image"
import { useEffect,useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutMe(){
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return(
            <section className="allsection h-[60rem]">
                    <div className="flex flex-wrap items-center">
                        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className=" rounded mb-[15rem] z-0 h-[40rem] w-[25rem] overflow-hidden "  >
                            <img className="myslef " src="/image/myself.jpg" alt="emma"  style={{ transform: `translate(${-60}px,${((offsetY * 0.2)-200)}px)` }}/>
                        </div>

                        <div data-aos="fade-left" data-aos-easing="linear" className="z-10 ml-[-3rem] pl-4 rounded text-white blue-back  w-6/12 flex flex-col justify-center h-[20rem] bg-black" style={{ transform: `translateY(-${((offsetY * 0.3)-70)}px)` }}>
                            <h2 className="para--font text-4xl">The name's</h2>
                            <h2 className="para--font text-4xl mb-4">Emmanuel</h2>
                            
                            <div className=" lined w-6/12 flex flex-col justify-center pr-4 pl-4 ml-4 w-full">
                            <p className="para--font text-lg mb-4">I am a front-end web developer based in Dublin, specializing in designing and developing exceptional web experiences. 
                            </p>
                            <p className=" para--font text-lg">
                            I work with Drop, an e-business organization, and other companies to create web 
                            products that are beautiful, responsive, and scalable. My main objective is to
                            provide tailor-made web solutions that perfectly fit our clients' needs and requirements.</p>
                            </div>
                        </div>
                    </div>
            </section>
    )
}