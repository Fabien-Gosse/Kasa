import React, { useContext } from 'react';
import Card from "../Card"
import styles from './CardGallery.module.scss'
import { DataContext } from '../../utils/context';

function CardGallery () {

    let { logements } = useContext(DataContext);

    if (logements.length !== 0) { 
    sessionStorage.setItem("savedLogements", JSON.stringify(logements));
    } else {
        if(sessionStorage.getItem("savedLogements") !== 0) {
            const dataSavedLogements = sessionStorage.getItem("savedLogements");
            logements = JSON.parse(dataSavedLogements);
        }
    }

    console.log(logements);

    return (
    <div className={styles.gallery}>
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