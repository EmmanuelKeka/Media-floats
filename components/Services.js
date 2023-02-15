import Image from "next/image"
export default function Services(){
    return(
        <div className=" flex flex-col justify-center items-center" id="services">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" className="blue-back">
                <path fill="#FFFFFF" fill-opacity="1" d="M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300"></path>
            </svg>
            <section className="back--white text-center flex-col flex items-center ">
                <h1 className="floating4 label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Services </h1>
                <div className="pt-6 relative button-div mt-auto mb-auto blue-back w-[14rem] h-[14rem] liquidBubbl--two overflow-hidden m-[ shadow-xl lg:w-[8rem] lg:h-[8rem]">
                    <Image className="floating" src="/image/emmanuelService.png" alt="emma"  height="300" width="300" priority/>
                </div>
        
                <div className="floating2 blue-back rounded-xl h-[23rem] w-[40rem] shadow-xl flex-col flex items-center mt-14 lg:w-[19rem] lg:h-[40rem]">

                        <div className="bg-white w-[9rem] h-[9rem] flex items-center justify-center liquidBubble overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem] m-5">
                                <h2 className="text-center mb-4 para--font text-gray-700 text-lg pt-2">Web application</h2>
                        </div>
                            <p className="para--font text-lg text-center pb-5 pl-5 pr-5 ">
                                As a web developer, I can provide comprehensive development 
                                services for your website. I can handle both front-end and 
                                back-end aspects of the project. On the front-end, I can work 
                                with client-provided designs or create my own, using technologies 
                                like HTML, CSS, and JavaScript, along with various libraries and frameworks, 
                                to create a visually appealing and functional website. On the back-end, 
                                I can work with either SQL or NoSQL databases, and implement features 
                                like user authentication, payment systems, and other necessary services. 
                                {"I'll also use security-focused plugins and frameworks to ensure website's "}
                                security. My goal is to deliver a professional website that meets your 
                                {"business's specific needs and goals."}
                            </p>
                </div>

                <div className="floating blue-back rounded-xl h-[20rem] w-[40rem] shadow-xl flex-col flex items-center mt-14 lg:w-[19rem] lg:h-[32rem]">

                    <div className="bg-white w-[9rem] h-[10rem] flex items-center justify-center liquidBubble overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem] m-5">
                        <h2 className="text-center text-gray-700 para--font text-lg  mt-auto mb-auto">Mobile Application</h2>
                    </div>
                    <p className="para--font text-lg text-center pb-5 pr-5 pl-5">
                        At Media Floats, we offer top-notch mobile application development services.
                        Whether you need a native app for a specific platform or a cross-platform solution,
                        {"I have the expertise to bring your vision to life. I'll work closely with you to"}
                        understand your needs and goals, and use the latest tools to deliver a high-quality, 
                        {"user-friendly app. I'll also assist in uploading your app to the appropriate app store."}
                        With my help, your mobile app will be a powerful tool for connecting with customers 
                        and growing your business.
                    </p>
                </div>

                <div className=" floating3 blue-back rounded-xl h-[19rem] w-[40rem] shadow-xl flex-col flex items-center mt-14 lg:w-[19rem] lg:h-[30rem]">
                    <div className="bg-white w-[9rem] h-[10rem] flex items-center justify-center liquidBubble overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem] m-5">
                        <h2 className="text-center text-gray-700 para--font text-lg  mt-auto mb-auto">Game</h2>
                    </div>
                    <div className="text-center flex flex-row justify-between flex-wrap max-w-4x w-full lg:flex-col lg:items-center">
                        <p className="para--font text-lg text-center pb-5 pr-5 pl-5">
                        As a software developer, I have a wide range of skills
                         and experience in various fields. One of my key areas 
                         of expertise is game development, where I have
                          extensive experience using the Unity engine to 
                          create engaging and immersive games for both desktop 
                          and mobile platforms. Whether you need a 3D or 2D game, 
                          I have the skills and experience to bring your vision to 
                          life. I pay close attention to gameplay, story, and visual 
                          design to ensure that each game I develop is unique and captivating.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}