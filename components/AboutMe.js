import Image from "next/image"
export default function AboutMe(){
    return(
        <div className=" flex flex-col" id="aboutMe">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" width="100%" height="100%">
                <path id="orange-circle"  fill="#00AEEF" fill-opacity="1" d="M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300" width="100%" height="100%"></path>
            </svg>
            
            <section className="blue-back text-center flex flex-col items-center">
                <h1 className="floating label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">About me</h1>
                <div className=" flex flex-col max-w-4x w-full flex-col items-center">


                        <div className="pt-6 relative bg-white w-[16rem] h-[16rem] liquidBubble overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem]">
                        <Image className="floating2" src="/image/emmalove.png" alt="emma"  height="300" width="300" priority/>
                        </div>


                    <div className="floating3 bg-white rounded-xl py-4 h-[14rem] w-[22rem] text-center shadow-xl lg:p-[0.5rem] lg:h-[23.5rem] lg:w-[14rem] p-0 text-lg text-left m-[1rem] lg:w-[12rem] lg:h-[33rem]">
                        <p className="para--font text-black lg:text-base pl-4 pr-4">
                        {" As a software developer, my passion lies in creating innovative and impactful applications. Allow me to assist you in bringing your unique vision to life, and let's work together to create something truly inspiring and game-changing. I am excited to be a part of this journey and to see your ideas come to fruition. Let's turn your dreams into a reality."}
                        </p>
                    </div>
                
                </div>
            </section>
        </div>
    )
}