import React, {useState, useEffect} from 'react';
import Card from "../Card"

function CardGallery () {
    const [logements, setLogements] = useState([])

    useEffect(
        () => {
        let ignore = false;
        fetch("logements.json")
            .then(response => response.json())
            .then(data => {if(!ignore)setLogements(data);})
            return () => {ignore=true};
    },[])

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