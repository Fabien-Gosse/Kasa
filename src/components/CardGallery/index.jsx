import React, { useContext } from 'react';
import Card from "../Card"
import styles from './CardGallery.module.scss'
import { DataContext } from '../../utils/context';

function CardGallery () {

    let { logements } = useContext(DataContext);

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