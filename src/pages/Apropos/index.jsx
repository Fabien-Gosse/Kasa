import BannerApropos from "../../components/BannerApropos";
import Collapse from "../../components/Collapse"
import { aproposColData } from "../../datas/AproposColData";
import styles from "./Apropos.module.scss"


function Apropos() {

    return (
        <main className={styles.Apropos}>
            <section className={styles.Apropos__banner}>
                <BannerApropos />
            </section>
            <section className={styles.Apropos__collapses}>
            {aproposColData.map(collapseData => {
                return (
                    <div className={styles.Apropos__collapses__container}>
                        <Collapse 
                        title={collapseData.title}
                        content={collapseData.content}
                        />
                    </div>
                )
            })}
            </section>
        </main>
    )
}

export default Apropos