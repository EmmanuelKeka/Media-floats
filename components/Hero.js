import Image from "next/image"
import { useEffect } from 'react';

export default function Hero(){

    return(
        
        <section className="allsection h-[50rem] flex flex-col  bg-white items-center justify-center"> 
            <div data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="1000" className=" text-center flex flex-col items-center justify-center">
                <h1 className="lm:text-5xl lg:text-8xl label-font mb-9  text-9xl tracking-wider">Media floats </h1>
                <p className="lm:text-xl lg:text-3xl para--font mb-2 text-4xl">
                Boost your brand with Media Floats.
                </p>
                <p className="lm:text-xl lg:text-3xl para--font text-4xl">
                Our exceptional websites Floats above the competition.
                </p>
            </div>
        </section>
    )
}