import './Header.scss'
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFolder} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        const navLinks = document.querySelectorAll("nav ul li")

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.forEach(link => {
                    link.classList.remove("active")
                });
                link.classList.add("active")
            })
        })
    }, [])
    
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>
                    ARTHUR <i>ZANG</i>
                </h1>
            </div>

            <nav>
                <ul>
                    <li className="active home-link"><a href="#home"><FontAwesomeIcon icon={faHome} color="#4d4d4e" /></a></li>
                    <li className="about-link"><a href="#about"><FontAwesomeIcon icon={faUser} color="#4d4d4e" /></a></li>
                    <li className="project-link"><a href="#projects"><FontAwesomeIcon icon={faFolder} color="#4d4d4e" /></a></li>
                    <li className="contact-link"><a href="#contact"><FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header