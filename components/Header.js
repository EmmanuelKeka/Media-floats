export default function Header(){
    return(
        <header className="blue-back">
            <h1 className="label-font label"> MEDIA FLOATS </h1>
            <nav >
                <ul>
                    <li className="label-font">
                        <a href="#aboutMe">
                        About me
                        </a>
                    </li>
                    <li className="label-font">
                        <a href="#">
                        Profolio
                        </a>
                    </li>
                    <li className="label-font">
                        <a href="#services">
                        Services
                        </a>
                    </li>
                    <li className="label-font">
                        <a href="#contact">
                        Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}