

function Card ({id, title, cover}) {
return (
    <article className="card">
        <img src={cover} alt={"Kasa -" + title} className="card__img"/>
        <h3 className="card__title">{title}</h3>
    </article>
)
}

export default Card