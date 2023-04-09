import {Link} from "react-scroll"
export default function Header(){
    return(
        <header className="bg-white">
            <h1 className="label-font myBlackText label-font2 text-3xl"> MEDIA FLOATS </h1>
             <nav className="lg:hidden">
                <ul>
                    <li className=" text-center">
                        <a href="" className=" myBlackText">About me</a>
                    </li>
                    <li className=" text-center">
                        <a href="" className=" myBlackText">Services</a>
                    </li>
                    <li className="text-center">
                        <a href=""className=" myBlackText">Contact</a>
                    </li>
                </ul>
            </nav> 
        </header>
    )
}