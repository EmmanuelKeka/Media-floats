export default function Hero(){
    return(
        
        <section className="hero--section flex flex-col items-center justify-center"> 
            <h1 className="label-font tittle blue--text pt-32 text-5xl drop-shadow-lg shadow-black">Media floats </h1>
            <p className="white--para para--font text-lg">Make a impact with your website <br/>
            by make your media float to your public</p>
            <p className="white--para para--font text-lg"> we deliver wesite on all categories such as: </p>
            <div className="mt-[4rem] flex flex-row flex-wrap max-w-4x w-full justify-between">
                <div className="m-[1rem] lg:w-[5rem]">
                <div className="web--suj blue-back liquidBubbl--two shadow-xl mb-5">
                <img src="/music.png" alt="music" className=" w-[85%]"/>
                </div>
                <span className="white--para para--font font-semibold mt-2 lg:text-[53%] ">MUSIC BLOG</span>
                </div>

                <div className="m-[1rem] lg:w-[5rem]">
                <div className="web--suj blue-back liquidBubbl--tree shadow-xl  mb-5">
                <img src="/profolio.png" alt="music" className=" w-[85%]"/>
                </div>
                <span className="white--para para--font para--font--tittle font-semibold lg:text-[53%]">Profolio</span>
                </div>

                <div className="m-[1rem] lg:w-[5rem]">
                <div className="web--suj blue-back liquidBubble shadow-xl  mb-5">
                <img src="/e-commerce.png" alt="music" className="pt-1 w-[85%]"/>
                </div>
                <span className="white--para para--font font-semibold lg:text-[53%]" >E-commerce</span>
                </div>
            </div>
        </section>
    )
}