import {Link} from 'react-scroll'
export default function Header(){
    return(
        <header className="blue-back">
            <h1 className="label-font text-3xl"> MEDIA FLOATS </h1>
            <nav className="lg:hidden">
                <ul>
                    <li className="label-font">
                        <Link  to="aboutMe" spy={true} smooth={true} offset={200} duration={500}>
                        <span>About me</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                    <li className="label-font">
                        <Link  to="#" spy={true} smooth={true} offset={200} duration={500}>
                        <span>Profolio</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                    <li className="label-font">
                        <Link to="services" spy={true} smooth={true} offset={200} duration={500}>
                        <span>Services</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                    <li className="label-font">
                        <Link  to="contact" spy={true} smooth={true} offset={200} duration={500}>
                        <span>Contact</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}