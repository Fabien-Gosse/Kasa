import Kasa_home from "../../assets/Kasa_home.jpg"
import styles from './BannerHome.module.scss'

function BannerHome () {

    return (
        <div className={styles.containerBanner}>
            <img src={Kasa_home} alt="" className={styles.imgBanner}/>
            <h2 className={styles.titreBanner}>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default BannerHome