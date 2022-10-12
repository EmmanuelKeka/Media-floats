export default function AboutMe(){
    return(
        <div className=" flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" >
                <path fill="#00AEEF" fill-opacity="1" d="M0,192,C220,100,440,100,660,192,C880,290,1100,290,1320,192 L1320 300 L0 300"></path>
            </svg>
            <section className="blue-back text-center flex flex flex-col items-center" id="aboutMe">
                <h1 className="label-font tittle white--text text-5xl mt-4">About me</h1>
                <div className=" flex flex-row justify-between flex-wrap text-5xl max-w-4x w-full lg:flex-col lg:items-center">
                    <div className="bg-white w-[14rem] h-[14rem] liquidBubble overflow-hidden m-[1rem]">
                        <img src="/emmalove.png" alt="emma" className="pt-1"/>
                    </div>
                    <div className="h-full w-[400px] p-0 text-lg text-left m-[1rem]">
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