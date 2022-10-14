export default function Footer(){
    return(
        <footer>
            <div className="h-[8rem] bg-white flex flex-row items-center justify-center items-center pb-2">
            <a href="#" className="h-[5rem] w-[5rem] ml-6 mr-6 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex  hover:w-[6rem] hover:h-[6rem]">
                <img src="./facebook.png" className="w-[70%] "/>
            </a>
            <a href="#" className="h-[5rem] w-[5rem] ml-6 mr-6 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex hover:w-[6rem] hover:h-[6rem]">
                <img src="./instagram.png" className="w-[70%] "/>
            </a>
            <a href="#" className="h-[5rem] w-[5rem] ml-6 mr-6 shadow-2xl blue-back rounded liquidBubbl--tree items-center justify-center flex hover:w-[6rem] hover:h-[6rem]">
                <img src="./twitter.png " className="w-[70%] "/>
            </a>
            </div>
        </footer>
    )
}