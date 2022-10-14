export default function Header(){
    return(
        <header className="blue-back">
            <h1 className="label-font text-3xl"> MEDIA FLOATS </h1>
            <nav className="lg:hidden">
                <ul>
                    <li className="label-font">
                        <a href="#aboutMe">
                        <span>About me</span>
                        <div className="liquid"></div>
                        </a>
                    </li>
                    <li className="label-font">
                        <a href="#">
                        <span>Profolio</span>
                        <div className="liquid"></div>
                        </a>
                    </li>
                    <li className="label-font">
                        <a href="#services">
                        <span>Services</span>
                        <div className="liquid"></div>
                        </a>
                    </li>
                    <li className="label-font">
                        <a href="#contact">
                        <span>Contact</span>
                        <div className="liquid"></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}