import {Link} from 'react-scroll'
export default function Header(){
    return(
        <header className="blue-back">
            <h1 className="label-font text-3xl"> MEDIA FLOATS </h1>
            <nav className="lg:hidden">
                <ul>
                    <li className="label-font text-center">
                        <Link  to="aboutMe" spy={true} smooth={true} offset={200} duration={500}>
                        <span className='LinkItem'>About me</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                    <li className="label-font text-center">
                        <Link to="services" spy={true} smooth={true} offset={200} duration={500}>
                        <span className='LinkItem'>Services</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                    <li className="label-font text-center">
                        <Link  to="#" spy={true} smooth={true} offset={200} duration={500}>
                        <span className='LinkItem'>Profolio</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                    <li className="label-font text-center">
                        <Link  to="contact" spy={true} smooth={true} offset={200} duration={500}>
                        <span className='LinkItem'>Contact</span>
                        <div className="liquid"></div>
                        </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}