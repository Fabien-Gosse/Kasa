import Kasa_Apropos from "../../assets/Kasa_Apropos.jpg"
import styles from './BannerApropos.module.scss'

function BannerApropos () {

    return (
        <div className={styles.containerBanner}>
            <img src={Kasa_Apropos} alt="" className={styles.imgBanner}/>
        </div>
    )
}

export default BannerApropos