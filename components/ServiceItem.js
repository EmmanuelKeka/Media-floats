import Image from "next/image"

export default function ServiceItem(props){
    let ssr = "../image/" + props.item.imageName

    return(
        <div className="lg:mb-5 media--link">
        <div >
            <div className="pt-6 pl-6 relative button-div mt-auto mb-auto blue-back w-[14rem] h-[14rem] liquidBubbl--two overflow-hidden shadow-xl lg:w-[8rem] lg:h-[8rem]">
            <img className="floating8 w-[95%] h-[95%]" src={props.item.imageName} alt="emma"/>
            </div>
            
        </div>
        <h2 className="white--para para--font para--font--tittle lg:text-[100%] mt-4">{props.item.tiltle}</h2>
        </div>
    )
}