import Image from "next/image"
export default function ProjectItem(props){
    return(
        <div className="lg:w-[5rem]  w-[9rem]">
            <div className="web--suj blue-back liquidBubble shadow-xl " onClick={props.projectItem.onClick}>
                <Image src={"/image/"+props.projectItem.imageUrl } alt="image" height="300" width="300"/>
            </div>
            <span className="white--para para--font lg:text-[70%]">E-commerce</span>
        </div>
    )
}