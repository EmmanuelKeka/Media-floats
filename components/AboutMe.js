import Image from 'next/image'
export default function AboutMe(){
    return(
        <div className=" flex flex-col" id="aboutMe">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" id="orange-circle">
                <path fill="#00AEEF" fill-opacity="1" d="M0,192,C220,100,440,100,660,192,C880,290,1100,290,1320,192 L1320 300 L0 300"></path>
                <animate
                xlink:href="#orange-circle" 
                attributename="d" 
                from="50" 
                to="450" 
                dur="2s" 
                begin="click" 
                values="M0,192,C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 300 L0 300; 
                M0,100,C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320 300 L0 300;
                M0,192,C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320 300 L0 300;
                M0,292,C220,292,440,100,660,100 C880,100,1100,292,1320,100 L1320 300 L0 300" 
                keytimes="0; 0.5; 0.8; 1" 
                repeatcount="indefinite" 
                id="circ-anim">
                </animate>
            </svg>
            <section className="blue-back text-center flex flex flex-col items-center">
                <h1 className="label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">About me</h1>
                <div className=" flex flex-row justify-between flex-wrap text-5xl max-w-4x w-full lg:flex-col lg:items-center">
                    <div className="bg-white w-[14rem] h-[14rem] liquidBubble overflow-hidden m-[1rem] shadow-xl lg:w-[12rem] lg:h-[12rem]">
                        <div className='pt-1'>
                        <Image src="/emmalove.png" alt="emma"  height="300" width="300" priority/>
                        </div>
                    </div>
                    <div className="h-[16rem] w-[25rem] lg:h-[30rem] lg:w-[14rem] p-0 text-lg text-left m-[1rem] lg:w-[12rem] lg:h-[33rem]">
                        <p className="para--font text-center">
                            My name is Emmanuel Keka, I am a web developer located in Ireland, Dublin. 
                            I love anime, cars and everything that has to do with technology and science.
                            I am very passionate about software development and love to see my ideas come to life.
                            Let me also help you to bring your ideas and dreams to life by providing you with a 
                            beautiful website, i am looking forward to working with you.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}