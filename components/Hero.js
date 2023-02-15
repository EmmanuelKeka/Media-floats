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

                <div className=" flex flex-row flex-wrap w-[45%] justify-between lg:w-[100%]">
                    <div className="lg:w-[7rem] w-[9rem]">
                    <div className="relative button-div web--suj blue-back liquidBubbl--two shadow-xl overflow-hidden">
                        <Image className="floating" src="/image/music.png" alt="music"  height="300" width="300" priority/>
                    </div>
                    <p className="floating4 white--para para--font mt-2 lg:text-[70%] ">MUSIC BLOG</p>
                    </div>

                    <div className="lg:w-[7rem]  w-[9rem]">
                    <div className="web--suj relative button-div blue-back liquidBubbl--tree shadow-xl overflow-hidden relative">
                        <Image className="floating2" src="/image/profolio.png" alt="music" height="300" width="300" priority/>
                    </div>
                    <p className="floating5 white--para para--font para--font--tittle lg:text-[70%]">Profolio</p>
                    </div>
                </div>

                <div className=" flex flex-row flex-wrap w-[45%] justify-between lg:w-[100%] lg:mt-11">

                    <div className="lg:w-[7rem]  w-[9rem]">
                    <div className="web--suj relative button-div blue-back liquidBubble shadow-xl overflow-hidden ">
                    <Image className="floating3" src="/image/e-commerce.png" alt="music" height="300" width="300" priority/>
                    </div>
                    
                    <p className="floating white--para para--font lg:text-[70%]" >E-commerce</p>
                    </div>

                    <div className="lg:w-[7rem]  w-[9rem]">
                    <div className="web--suj relative button-div blue-back liquidBubble shadow-xl overflow-hidden">
                    <Image className="floating4" src="/image/game.png" alt="music" height="300" width="300" priority/>
                    </div>
                    <p className="floating6 white--para para--font lg:text-[70%]" >Game</p>
                    </div>
                </div>
            </div>
        </section>
    )
}