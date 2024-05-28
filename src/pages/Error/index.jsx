import { Link } from 'react-router-dom'
import errorLogo from "../../assets/404.png"
import styles from "./Error.module.scss"


function Error() {
    return (
        <main className={styles.error}>
            <img src={errorLogo} alt="" className={styles.error__img}/>
            <p className={styles.error__text}>Oups! La page que <span className={styles.error__text__span}>vous demandez n'existe pas.</span></p>
            <Link to="/" className={styles.error__accueilLink}>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error
