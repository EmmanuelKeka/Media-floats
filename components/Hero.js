import Image from "next/image"
export default function Hero(){
    return(
        
        <section className="hero--section flex flex-col items-center justify-center"> 
            <h1 className="floating label-font tittle blue--text pt-32 text-5xl drop-shadow-lg shadow-black">Media floats </h1>
            <p className="floating2 white--para para--font text-lg">
            {"Leave a lasting impression with our expert application development services."} <br/>
                {"From mobile to web and even games, "}
                <br/>{"we'll make your brand shine across various industries and niches. our services includes"}
            </p>
            <div className="mt-[4rem] flex flex-row flex-wrap max-w-4x w-full justify-between">

                <div className=" flex flex-row flex-wrap lg:w-[45%] w-[40%] justify-between lm:w-[100%]">
                    <div className="">
                    <div className="relative button-div web--suj blue-back rounded-3xl shadow-xl overflow-hidden h-[6rem] w-[6rem]">
                        <img className="floating5" src="/image/music.png" alt="music"  height="60" width="60" priority/>
                    </div>
                    <p className=" white--para para--font mt-2 lg:text-[70%] ">MUSIC BLOG</p>
                    </div>

                    <div className="">
                    <div className="web--suj relative button-div blue-back rounded-3xl shadow-xl overflow-hidden relative h-[6rem] w-[6rem]">
                        <img className="floating6" src="/image/profolio.png" alt="music" height="60" width="60" priority/>
                    </div>
                    <p className=" white--para para--font para--font--tittle lg:text-[70%]">Profolio</p>
                    </div>
                </div>

                <div className=" flex flex-row flex-wrap w-[40%] lg:w-[45%] justify-between lm:w-[100%] lm:mt-11">

                    <div className="">
                    <div className="web--suj relative button-div blue-back rounded-3xl shadow-xl overflow-hidden h-[6rem] w-[6rem]">
                    <img className="floating7" src="/image/e-commerce.png" alt="e-commerce" height="60" width="60" priority/>
                    </div>
                    
                    <p className=" white--para para--font lg:text-[70%]" >E-commerce</p>
                    </div>

                    <div className="">
                    <div className="web--suj relative button-div blue-back rounded-3xl shadow-xl overflow-hidden h-[6rem] w-[6rem]">
                    <img className="floating8" src="/image/game.png" alt="game" height="60" width="60" priority/>
                    </div>
                    <p className=" white--para para--font lg:text-[70%]" >Game</p>
                    </div>
                </div>
            </div>
        </section>
    )
}