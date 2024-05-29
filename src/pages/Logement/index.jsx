import { DataContext } from '../../utils/context';
import Slideshow from "../../components/Slideshow"
import React, {useContext} from 'react';
import { useParams } from "react-router-dom";
import styles from "./Logement.module.scss"
import Collapse from '../../components/Collapse';
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";
import { Navigate } from "react-router-dom";



function Logement() {

    let { logements } = useContext(DataContext);

    console.log(logements);

    const { id } = useParams();
    
    if (logements.length !== 0) { 
        sessionStorage.setItem("savedLogements", JSON.stringify(logements));
    }
    
    let dataCurrentLogement = logements.find(data => data.id === id);
    
    if (!dataCurrentLogement) {
        const dataSavedLogements = sessionStorage.getItem("savedLogements");
        logements = JSON.parse(dataSavedLogements);
        dataCurrentLogement = logements.find(data => data.id === id);
    }
    
    const LogementsId = logements.map(logement => logement.id);

    const isValidLogementId = (logId) => {
        if ((Array.from(LogementsId)).includes(logId))
        return true
    }


    if (!isValidLogementId(id)) {
        return <Navigate to="/*" replace />;
    }

    return (
        <main className={styles.logements}>
            <section className={styles.logements__slideshow}>
                <Slideshow
                pictures={dataCurrentLogement.pictures}
                />
            </section>
            <section className={styles.logements__info}>
                <div className={styles.location}>
                    <h2 className={styles.location__title}>{dataCurrentLogement.title}</h2>
                    <p className={styles.location__city}>{dataCurrentLogement.location}</p>
                    <div className={styles.location__tags}>
                        {dataCurrentLogement.tags.map((tags , index) => {
                            return(
                                <Tags 
                                    key={`${tags}-${index}`}
                                    tags={tags}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className={styles.host}>
                    <div className={styles.host__info}>
                        <p className={styles.host__info__name}>{dataCurrentLogement.host.name}</p>
                        <img src={dataCurrentLogement.host.picture} className={styles.host__info__picture} alt="host"></img>
                    </div>
                    <div className={styles.host__rating}>
                        <Rating 
                            rating={dataCurrentLogement.rating}
                        />
                    </div>
                </div>
            </section>
            <section className={styles.logements__collapse}>
                <div className={styles.logements__collapse__description}>
                    <Collapse 
                        title="Description"
                        content={dataCurrentLogement.description}
                    />
                </div>
                <div className={styles.logements__collapse__equipment}>
                    <Collapse
                        title="Équipements"
                        content={dataCurrentLogement.equipments}
                    />
                </div>
            </section>
        </main>
    )
}

export default Logement