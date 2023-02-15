import ProjectItem from "./ProjectItem"
export default function Profolio(){
    let projectItem = {
        imageUrl: "emmalove.png",
        onClick: function(){
            alert("lol");
        }
    }
    return(
        <div className=" flex flex-col" id="Profolio">
            <div className=" w-[100%] h-[16rem] button-div relative overflow-hidden">
                <div class="ocean">
                    <div class="wavevi"></div>
                </div>
            </div>
            
            <section className="blue-back text-center flex flex-col items-center">
            <h1 className="floating2 label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Profolio </h1>
            
            </section>
        </div>
    )
}