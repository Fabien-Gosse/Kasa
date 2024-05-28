import styles from "./Rating.module.scss"
import { FaStar } from "react-icons/fa6"

function Rating({ rating }) {
    return (
        <div className={styles.rating}>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    (ratingValue <= rating) ? <FaStar className={styles.rating__redStar}/> : <FaStar className={styles.rating__greyStar} />
                )
            })}
        </div>
        

    )
}

export default Rating