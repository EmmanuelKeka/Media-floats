import Image from "next/image"
export default function Contact(){
    return(
        
            <section  className="allsection h-[40rem]  text-center flex flex-row items-center justify-center">
                <div className="w-full h-full "  data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="1000">
                <h1 className="text-5xl p-12 para--font">Contact</h1>
                <form className="mb-8 max-w-4x w-full" >
                <div className="flex flex-row justify-between mb-4 w-full lg:flex-col">
                <input type="text" id="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-[49%] lg:w-[100%]" placeholder="Name" required/>
                <input type="text" id="first_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-[49%] lg:w-[100%]" placeholder="Email" required/>
                </div>
                <input type="text" id="subject" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-[100%] lg:w-[100%]" placeholder="Subject" required/>
                <textarea rows="10" placeholder="Message" cols="50" className=" appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-[100%] lg:w-[100%]"/>
                <button class="sumbut-b text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-[100%]"> Send </button>
                </form>
                </div>
            </section>
    )
    
}