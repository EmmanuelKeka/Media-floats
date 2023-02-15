import Image from "next/image"
import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import { keyframes } from 'styled-components';
import { useWebAnimations } from '@wellyshen/use-web-animations';

export default function AboutMe(){
    const svgRef = useRef(null);
    const WaveAnimation = () => {
      
        useEffect(() => {
          const timeline = anime.timeline({
            targets: svgRef.current.querySelectorAll("path"),
            duration: 8000,
            easing: "linear",
            loop: true
          });
      
          timeline.add({
            d: [
              {
                value:
                  "M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300"
              },
              {
                value:
                  "M0 100 C220 100 440 292 660 292 C880 292 1100 100 1320 100 L1320 300 L0 300"
              },
              {
                value:
                  "M0 192 C220 290 440 290 660 192 C880 100 1100 100 1320 192 L1320 300 L0 300"
              },
              {
                value:
                  "M0 292 C220 292 440 100 660 100 C880 100 1100 292 1320 100 L1320 300 L0 300"
              },
              {
                value:
                  "M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300"
              }
            ]
          });
        }, []);
    }


   

    return(
        <div className=" flex flex-col" id="aboutMe">
<svg
      ref={svgRef}
      viewBox="0 0 1320 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "black" }}
    >
      <path
        fill="#d0d0d0"
        d="M0 300 L0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 Z"
      ></path>
    </svg>

      

            
            <section className="blue-back text-center flex flex-col items-center">
                <h1 className="floating label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">About me</h1>
                <div className=" flex flex-col max-w-4x w-full flex-col items-center">


                        <div className="pt-6 button-div relative bg-white w-[16rem] h-[16rem] liquidBubble overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem]">
                        <Image className="floating2 " src="/image/emmalove.png" alt="emma"  height="300" width="300" priority/>
                        </div>


                    <div className="floating3 bg-white rounded-xl py-4 h-[14rem] w-[22rem] text-center shadow-xl lg:p-[0.5rem] text-lg text-left m-[1rem] lg:w-[19rem] lg:h-[13rem]">
                        <p className="para--font text-black lg:text-base pl-4 pr-4">
                        {" As a software developer, my passion lies in creating innovative and impactful applications. Allow me to assist you in bringing your unique vision to life, and let's work together to create something truly inspiring and game-changing. I am excited to be a part of this journey and to see your ideas come to fruition. Let's turn your dreams into a reality."}
                        </p>
                    </div>
                
                </div>
            </section>
        </div>
    )
}