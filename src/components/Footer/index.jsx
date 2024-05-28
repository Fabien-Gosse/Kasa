import FooterLogo from "../../assets/Kasa_logo_footer.png"
import "./Footer.scss"

function Footer() {

    return (
        <footer className="footer">
            <img src={FooterLogo} alt="logo Kasa blanc" className="footer__logo"/>
            <p className="footer__credits">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer