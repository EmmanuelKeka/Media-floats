export default function Footer(){
    return(
        <footer>
            <div className="h-[8rem] bg-white flex flex-row items-center justify-center items-center pb-2">
            <a href="#" className="h-[4rem] w-[4rem] ml-3 mr-3 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex media--link">
                <img src="./image/facebook.png" className="w-[70%] "/>
            </a>
            <a href="#" className="h-[4rem] w-[4rem] ml-3 mr-3 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex media--link">
                <img src="./image/instagram.png" className="w-[70%] "/>
            </a>
            <a href="#" className="h-[4rem] w-[4rem] ml-3 mr-3 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex media--link">
                <img src="./image/twitter.png " className="w-[70%] "/>
            </a>
            </div>
        </footer>
    )
}