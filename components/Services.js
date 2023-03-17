import Image from "next/image"
export default function Services(){
    if (process.browser) {
        const cards = document.querySelectorAll('.cards');
    
    const setClasses = () => {
        const classes = ['left', 'active', 'right'];
        cards.forEach((card, index) => card.classList.add(classes[index]))
    }
    
    
    const changePositions = (e) => {
        const clickedCard = e.currentTarget
        const activeCard = document.querySelector('.cards.active')
        if(clickedCard.classList.contains('active')) return;
        const classesFrom = e.currentTarget.className
        const classesTo = activeCard.className
        clickedCard.className = classesTo
        activeCard.className = classesFrom
    }
    cards.forEach((card) => {
        card
            .addEventListener('click', changePositions)
    })
    
    
    setClasses();}
    return(
        <div className=" flex flex-col justify-center items-center" id="services">
            <div className=" w-[100%] blue-back h-[13rem] button-div relative overflow-hidden mb-[-6px]">
                <div class="ocean">
                    <div class="wavevi_white"></div>
                </div>
            </div>
            <section className="back--white text-center flex-col flex items-center ">
                <h1 className="floating4 label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Services </h1>
                <div className="pt-6 liquidBubbl--tree relative button-div mt-auto mb-auto blue-back w-[14rem] h-[14rem] rounded-3xl shadow-2xl overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem]">
                    <Image className="floating8" src="/image/emmanuelService.png" alt="emma"  height="300" width="300" priority/>
                </div>
                <div className=" bg-white rounded-xl py-4 h-[16rem] w-[40rem] text-center shadow-2xl lg:p-[0.5rem] text-lg text-left m-[1rem] lg:w-[19rem] lg:h-[27rem] mt-16 mb-16 blue-back">
                <p className="para--font text-white lg:text-base pl-4 pr-4">
                    {
                        "As a web developer, I can provide comprehensive development " +
                        "services for your website. I can handle both front-end and "+
                        "back-end aspects of the project. On the front-end, I can work " +
                        "with client-provided designs or create my own, using technologies "+ 
                        "like HTML, CSS, and JavaScript, along with various libraries and frameworks, " +
                        "to create a visually appealing and functional website. On the back-end, " +
                        "I can work with either SQL or NoSQL databases, and implement features " +
                        "like user authentication, payment systems, and other necessary services. " +
                        "I'll also use security-focused plugins and frameworks to ensure website's" +
                        " security. My goal is to deliver a professional website that meets your " + 
                        "business's specific needs and goals."
                    }
                </p>
                </div>
        
                <div class="container">
                    <div class="cards w-[30rem] h-[30rem] lm:h-[13rem] lm:w-[13rem] lg:h-[20rem] lg:w-[20rem] overflow-hidden 	">
                    <img className="w-[100%] h-[100%]" src="image/web1.png" alt="emma"/>
                    </div>
                    <div class="cards  w-[30rem] h-[30rem] lm:h-[13rem] lm:w-[13rem] lg:h-[20rem] lg:w-[20rem] overflow-hidden ">
                    <img className=" w-[100%] h-[100%] " src="image/web2.png" alt="emma"/>
                    </div>
                    <div class="cards  w-[30rem] h-[30rem] overflow-hidden lm:h-[13rem] lm:w-[13rem] lg:h-[20rem] lg:w-[20rem] " >
                    <img className="w-[100%] h-[100%]" src="image/web3.png" alt="emma"/>
                    </div>
                </div>

            </section>
        </div>
    )
}