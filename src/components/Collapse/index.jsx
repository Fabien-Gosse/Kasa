import { useState } from "react";
import styles from "./Collapse.module.scss"
import { FaChevronUp } from "react-icons/fa6";

function Collapse ({title, content}) {

    const [isDescriptionVisible, setIsDescritpionVisible] = useState(false);

    const showDescription = () => {
        setIsDescritpionVisible(!isDescriptionVisible);
    }

return (
    <article className={styles.collapse}>
        <div className={styles.collapse__container}>
            <h3 className={styles.collapse__container__title}>{title}</h3>
            {isDescriptionVisible ? <FaChevronUp className={styles.collapse__container__chevronUp} onClick={showDescription}/> : <FaChevronUp className={styles.collapse__container__chevronDown} onClick={showDescription}/>}
        </div>
        <div className={styles.collapse__text}>
            {isDescriptionVisible ? <div className={styles.collapse__text__descriptionShow}>
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p className={styles.collapse__text__descriptionShow__array} key={index}>{item}</p>
                    )}): <p className={styles.collapse__text__descriptionHidden__paragraph}>{content}</p>
                }
            </div> : <div className={styles.collapse__text__descriptionHidden}>
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p className={styles.collapse__text__descriptionHidden__array} key={index}>{item}</p>
                    )}) : <p className={styles.collapse__text__descriptionHidden__paragraph}>{content}</p>
                }
            </div>}
        </div>
    </article>
)
}

export default Collapse