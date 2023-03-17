import Image from "next/image"
export default function Contact(){
    return(
        <div className="flex flex-col mt-40" id="contact">
            <div className=" w-[100%] h-[16rem] mb-[-3px] button-div relative overflow-hidden">
                <div class="ocean">
                    <div class="wavevi"></div>
                </div>
            </div>
            
            <section className="blue-back text-center flex flex-col pb-[8rem] items-center">
                <h1 className="floating3 label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">Contact</h1>
                <div className="pt-1 bg-white relative button-div  bg-white w-[14rem] h-[14rem] liquidBubbl--two overflow-hidden mb-9 shadow-xl lg:w-[8rem] lg:h-[8rem] ">
                    <Image className="floating6" src="/image/emmalove.png" alt="emma"  height="300" width="300" priority/>
                </div>
                <form className="mb-8 max-w-4x w-full">
                <div className="flex flex-row justify-between mb-4 w-full lg:flex-col">
                <input type="text" id="name" class=" focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-2 text-black placeholder-gray-300 bg-white text-sm rounded-lg w-[49%] p-2.5 shadow-xl lg:w-[100%]" placeholder="Name" required/>
                <input type="text" id="first_name" class="focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-2 text-black placeholder-gray-300 bg-white text-sm rounded-lg w-[49%] p-2.5 shadow-xl lg:w-[100%] lg:mt-3" placeholder="Email" required/>
                </div>
                <input type="text" id="first_name" class=" focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-2 placeholder-gray-300 bg-white text-sm rounded-lg w-full text-black p-2.5 mb-8 shadow-xl" placeholder="Subject" required/>
                <textarea rows="10" placeholder="Message" cols="50" className="focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-2 placeholder-gray-300 bg-white mb-4 text-black text-sm rounded-lg w-full p-2.5 resize-none bg-white shadow-xl"/>
                <button class=" bg-slate-200 hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border w-full border-gray-400 rounded shadow"> Send </button>
                </form>
            </section>
        </div>
    )
    
}