export default function Contact(){
    return(
        <div className=" flex flex-col" id="contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" >
                <path fill="#00AEEF" fill-opacity="1" d="M0,192,C220,100,440,100,660,192,C880,290,1100,290,1320,192 L1320 300 L0 300"></path>
            </svg>
            <section className="blue-back text-center flex flex-col items-center">
                <h1 className="label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">Contact</h1>
                <div className=" mt- bg-white w-[14rem] h-[14rem] liquidBubbl--two overflow-hidden mb-9 shadow-xl">
                        <img src="/EmmanuelContact.png" alt="emma" className="pt-1"/>
                </div>
                <form className="mb-8 max-w-4x w-full">
                <div className="flex flex-row justify-between mb-4 w-full">
                <input type="text" id="first_name" class="text-sm rounded-lg w-[49%] p-2.5 bg-white text-black shadow-xl" placeholder="Name" required/>
                <input type="text" id="first_name" class="text-sm rounded-lg w-[49%] p-2.5 bg-white text-black shadow-xl" placeholder="Email" required/>
                </div>
                <input type="text" id="first_name" class="text-sm rounded-lg w-full p-2.5 mb-4 bg-white text-black shadow-xl" placeholder="Subject" required/>
                <textarea id="w3review" name="w3review" rows="4" placeholder="Message" cols="50" className=" mb-4 text-black text-sm rounded-lg w-full p-2.5 resize-none bg-white shadow-xl"/>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border w-full border-gray-400 rounded shadow"> Send </button>
                </form>
            </section>
        </div>
    )
    
}