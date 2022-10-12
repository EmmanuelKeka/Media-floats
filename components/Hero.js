export default function Hero(){
    return(
        
        <section className="hero--section flex flex-col items-center justify-center"> 
            <h1 className="label-font tittle blue--text pt-32 text-5xl">Media floats </h1>
            <p className="white--para para--font text-lg">Make a impact with your website <br/>
            by make your media float to your public</p>
            <p className="white--para para--font text-lg"> we deliver wesite on all categories such as: </p>
            <div className="mt-[4rem] flex flex-row flex-wrap max-w-4x w-full justify-between lg:flex-col lg:items-center">
                <div className="m-[1rem]">
                <div className="web--suj blue-back liquidBubbl--two w-[14rem] h-[14rem] shadow-xl">
                <img src="/music.png" alt="music"/>
                </div>
                <span className="white--para para--font">Music</span>
                </div>

                <div className="m-[1rem]">
                <div className="web--suj blue-back liquidBubbl--tree w-[14rem] h-[14rem] shadow-xl">
                <img src="/profolio.png" alt="music"/>
                </div>
                <span className="white--para para--font">Profolio</span>
                </div>

                <div className="m-[1rem]">
                <div className="web--suj blue-back liquidBubble w-[14rem] h-[14rem] shadow-xl">
                <img src="/e-commerce.png" alt="music" className="pt-5"/>
                </div>
                <span className="white--para para--font">E-commerce</span>
                </div>
            </div>
        </section>
    )
}