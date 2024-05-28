import { Link } from 'react-router-dom'
import HeaderLogo from "../../assets/Kasa_logo_header.png"
import { useLocation } from "react-router-dom"
import './Header.scss'

function Header() {

    const sampleLocation = useLocation();
    let accueilLink = false;
    let aproposLink = false;

    if (sampleLocation.pathname === "/" ) {
        accueilLink = true;
    } if (sampleLocation.pathname === "/Apropos") {
        aproposLink = true;
    }

    return (
        <header className="header">
            <div className='header__container'>
                <img src={HeaderLogo} alt="logo Kasa rouge" className="headerLogo"/>
                <nav className="nav">
                    <ul>            
                    <li className="li">{accueilLink ? <p className="li__accueil">Accueil</p> : <Link to="/" className="li__Link">Accueil</Link>}</li>
                    <li className="li">{aproposLink ? <p className="li__apropos">A Propos</p> : <Link to="/Apropos" className="li__Link">A Propos</Link>}</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

//<Link to="/Apropos" className={aproposLink ? "li__Link " + aproposLink : "li__Link"}>A Propos</Link>