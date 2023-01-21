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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 290" width="100%" height="100%">
                <path fill="#00AEEF" fill-opacity="1" d="M0 192 C220 100 440 100 660 192 C880 290 1100 290 1320 192 L1320 300 L0 300" width="100%" height="100%"></path>
            </svg>
            <section className="blue-back text-center flex flex-col items-center">
            <h1 className="floating2 label-font tittle blue--text text-5xl mt-4 drop-shadow-lg shadow-black"> Profolio </h1>
            
            </section>
        </div>
    )
}