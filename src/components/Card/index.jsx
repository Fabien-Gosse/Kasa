import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card ({id, title, cover}) {
return (
    <Link to={`/Logement/${id}`} className={styles.card}>
        <img src={cover} alt={title} className={styles.card__img}/>
        <h3 className={styles.card__title}>{title}</h3>
    </Link>
)
}

export default Card