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
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIsWideScreen(width > 860);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return(
            <section className="allsection lg:pt-[20rem] lm:pt-[0rem] lg:h-[60rem] lm:h-[55rem] h-[50rem]">
                <div>
    </div>
                    <div className="flex lm:flex-col flex-wrap items-center">
                     <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className="lg:w-[20rem] lm:w-[25rem] lm:h-[25rem] rounded lg:mb-[4rem]  mb-[15rem] z-0 h-[40rem] w-[25rem] overflow-hidden "  >
                            <img className="myslef" src="/image/myself.jpg" alt="emma"  style={{ transform: `translate(${-60}px,${((offsetY * 0.2)-200)}px)` }}/>
                        </div> 

                        <div data-aos="fade-left" data-aos-easing="linear" className='w-[30rem] lg:w-[25rem] h-[30rem] z-10 lm:h-[25rem] lm:ml-[0rem] ml-[-3rem] pl-4 rounded text-white blue-back flex flex-col justify-center bg-black'  style={{ transform: `translateY(-${ isWideScreen ? ((offsetY * 0.3)-120) : 0 }px)` }}>
                            <h2 className="lm:text-2xl para--font text-4xl">The name's</h2>
                            <h2 className="lm:text-2xl para--font text-4xl mb-4">Emmanuel</h2>
                            
                            <div className="lined w-6/12 flex flex-col justify-center pr-4 pl-4 w-full">
                            <p className="lm:text-base para--font text-lg mb-4">I am a front-end web developer based in Dublin, specializing in designing and developing exceptional web experiences. 
                            </p>
                            <p className="lm:text-base para--font text-lg">
                            I work with Drop, an e-business organization, and other companies to create web 
                            products that are beautiful, responsive, and scalable. My main objective is to
                            provide tailor-made web solutions that perfectly fit our clients' needs and requirements.</p>
                            </div>
                        </div>
                    </div>
            </section>
    )
}