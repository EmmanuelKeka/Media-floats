export default function Footer(){
    return(
        <footer  className="">
            <div className="h-[8rem] bg-white flex flex-row items-center justify-center items-center pb-2">
            <a href="#" className=" relative button-div h-[4rem] w-[4rem] ml-3 mr-3 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex media--link overflow-hidden">
                <img  src="./image/facebook.png" className="w-[70%] floating"/>
            </a>
            <a href="#" className="relative button-div h-[4rem] w-[4rem] ml-3 mr-3 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex media--link overflow-hidden">
                <img  src="./image/instagram.png" className="w-[70%] floating2"/>
            </a>
            <a href="#" className="relative button-div h-[4rem] w-[4rem] ml-3 mr-3 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex media--link overflow-hidden">
                <img src="./image/twitter.png " className="w-[70%] floating3"/>
            </a>
            </div>
        </footer>
    )
}