import Image from 'next/image'
export default function AboutMe(){
    return(
        <div className=" flex flex-col" id="aboutMe">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" width="100%" height="100%">
                <path id='"orange-circle" ' fill="#00AEEF" fill-opacity="1" d="M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300" width="100%" height="100%"></path>
            </svg>
            <section className="blue-back text-center flex flex-col items-center">
                <h1 className="label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">About me</h1>
                <div className=" flex flex-row justify-between  flex-wrap text-5xl max-w-4x w-full lg:flex-col lg:items-center">
                    <div className="bg-white w-[20rem] h-[20rem] liquidBubble overflow-hidden shadow-xl lg:w-[14rem] lg:h-[14rem]">
                        <div className='pt-6'>
                        <Image src="/emmalove.png" alt="emma"  height="300" width="300" priority/>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl m-[1rem] py-4 h-[18rem] w-[22rem] text-center shadow-xl lg:p-[0.5rem] lg:h-[27rem] lg:w-[14rem] p-0 text-lg text-left m-[1rem] lg:w-[12rem] lg:h-[33rem]">
                        <p className="para--font text-black">
                        Hi, I am Emmanuel Keka. I love anime, cars, and everything that has to do with technology and science. 
                        I am very passionate about software development and love to see my ideas come to life. Let me also help you bring your 
                        ideas and dreams to life by providing you with a beautiful website. I am looking forward to working with you.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}