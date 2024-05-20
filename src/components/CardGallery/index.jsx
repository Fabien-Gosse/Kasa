import Card from "../Card"
import logements from "../../datas/logements"

function CardGallery () {
    return (
    <div className="gallery">
        {logements.map(logement => {
                return (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                )
            })}
    </div>
    )
}

export default CardGallery