import Image from 'next/image'
export default function Services(){
    return(
        <div className=" flex flex-col justify-center items-center" id="services">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" className="blue-back">
                <path fill="#FFFFFF" fill-opacity="1" d="M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300"></path>
            </svg>
            <section className="back--white text-center">
                <h1 className="label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Services </h1>
                <div className="flex flex-row justify-between flex-wrap max-w-4x w-full lg:flex-col lg:items-center">
                    <div className="h-[24rem] w-[14rem] blue-back text-2xl text-left rounded-xl p-5 m-[1rem] shadow-xl lg:w-[12rem] lg:h-[26rem]">
                        <h2 className="text-center mb-4 font-bold para--font text-lg">Front-end</h2>
                        <p className="para--font text-lg text-center">
                        can work with cleint design or provide a design.
                        i will impliment the website using HTML, CSS and 
                        Javascript. i will make use of diffrent libriries 
                        and framework to bring your website to the next level     
                        </p>
                    </div>
                    <div className=" mt- blue-back w-[14rem] h-[14rem] liquidBubbl--two overflow-hidden m-[1rem] shadow-xl lg:w-[12rem] lg:h-[12rem]">
                        <div className='pt-6'>
                        <Image src="/emmanuelService.png" alt="emma"  height="300" width="300" priority/>
                        </div>
                    </div>

                    <div className="h-[24rem] w-[14rem] blue-back text-2xl text-left rounded-xl p-5 m-[1rem] shadow-xl lg:w-[12rem] lg:h-[26rem]">
                        <h2 className="text-center mb-4 font-bold para--font text-lg"> Back-end</h2>
                        <p className="para--font text-lg text-center">
                        can work eather with SQL or NoSQL database.
                        will impliment user authentification, payment 
                        System and other service.
                        will make use of plugins and frimework to 
                        ensure user security  
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}