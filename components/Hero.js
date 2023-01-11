export default function Hero(){
    return(
        
        <section className="hero--section flex flex-col items-center justify-center"> 
            <h1 className="label-font tittle blue--text pt-32 text-5xl drop-shadow-lg shadow-black">Media floats </h1>
            <p className="white--para para--font text-lg">Make a impact with your website <br/>
            by make your media float to your public</p>
            <p className="white--para para--font text-lg"> we deliver wesite on all categories such as: </p>
            <div className="mt-[4rem] flex flex-row flex-wrap max-w-4x w-full justify-between lg:flex-col lg:items-center">
                <div className="m-[1rem] ">
                <div className="web--suj blue-back liquidBubbl--two w-[10rem] h-[10rem] shadow-xl lg:w-[12rem] lg:h-[12rem] mb-5">
                <img src="/music.png" alt="music" className=" w-[85%]"/>
                </div>
                <span className="white--para para--font font-semibold mt-2">MUSIC BLOG</span>
                </div>

                <div className="m-[1rem]">
                <div className="web--suj blue-back liquidBubbl--tree w-[10rem] h-[10rem] shadow-xl lg:w-[12rem] lg:h-[12rem] mb-5">
                <img src="/profolio.png" alt="music" className=" w-[85%]"/>
                </div>
                <span className="white--para para--font font-semibold">Profolio</span>
                </div>

                <div className="m-[1rem]">
                <div className="web--suj blue-back liquidBubble w-[10rem] h-[10rem] shadow-xl lg:w-[12rem] lg:h-[12rem] mb-5">
                <img src="/e-commerce.png" alt="music" className="pt-5 w-[85%]"/>
                </div>
                <span className="white--para para--font font-semibold">E-commerce</span>
                </div>
            </div>
        </section>
    )
}