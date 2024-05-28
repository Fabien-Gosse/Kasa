import styles from "./Tags.module.scss"

function Tags({ tags }) {
    return (
            <p className={styles.tagsText}>{tags}</p>
    )
}

export default Tags