import React, { useState } from "react";
export default function Profolio(){
    const [size, setSize] = useState({ width: 0, height: 0 }); // initialize size to { width: 0, height: 0 }
    const[displayDiv,setdisplayDiv] = useState( "none" )
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const makebig = async () => {
        setdisplayDiv("flex")
        await delay(1);
        setSize({ width: 70, height: 70 });

      };
    const kill = async () => {
        setSize({ width: 0, height: 0 });
        await delay(700);
        setdisplayDiv("none")
    

    };
    const handleSizeChange = () => {
    
        makebig()
    };

    const closeWindow = () => {
        kill()
    };

    return(
        <div className=" flex flex-col" id="Profolio">
            <div className=" w-[100%] h-[16rem] button-div relative mb-[-3px] overflow-hidden">
                <div class="ocean">
                    <div class="wavevi"></div>
                </div>
            </div>
            
            <section className="blue-back text-center flex flex-col items-center">
                <h1 className="floating2 label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Profolio </h1>
                
                <div className=" flex flex-row lm:flex-col flex-wrap justify-between  lm:items-center  w-[100%]">
                    <div className="">
                        <div className="mt-5 web--suj relative button-div text-white bg-white liquidBubbl--tree shadow-xl overflow-hidden relative h-[15rem] w-[15rem]" onClick={handleSizeChange}>
                            <img className="floating6" src="/image/stayfit.png" alt="music" height="180" width="180" priority/>
                        </div>
                        <p className="floating5 para--font text-white text-[170%] para--font--tittle">Stayfit</p>
                    </div>

                    <div className="">
                        <div className="mt-5 web--suj relative button-div text-white bg-white liquidBubble shadow-xl overflow-hidden relative h-[15rem] w-[15rem]" onClick={handleSizeChange}>
                            <img className="floating6" src="/image/burningsun.png" alt="music" height="180" width="180" priority/>
                        </div>
                        <p className="floating5 para--font text-white text-[170%] para--font--tittle">burning sun</p>
                    </div>

                    <div className="button-div overflow-hidden box liquidBubbl--tree p-5 flex-col items-center" style={{ width: `${size.width}%`, height: `${size.height}%`,display:`${displayDiv}`}} onClick={closeWindow}>
                    <h1 className="label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Profolio </h1>
                    <img className="" src="/image/stayfit.png" alt="music" height="50" width="50" priority/>
                        <p className="para--font text-lg text-center">
                        As a software developer, I have a wide range of skills
                         and experience in various fields. One of my key areas 
                         of expertise is game development, where I have
                          extensive experience using the Unity engine to 
                        </p>

                    </div>
                </div>
                
            </section>
        </div>
    )
}