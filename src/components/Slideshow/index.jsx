import styles from "./Slideshow.module.scss"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { useState } from "react"
import styled, { css, keyframes } from 'styled-components'

let ImgSlider = styled.img``


function Slideshow ( {pictures} ) {

    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)

    const actualPicture = pictures[currentPictureIndex]


    const slideRightKey = keyframes`
        0%, 100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-50%);
        }
        50.1% {
            transform: translateX(+50%);
        }
    `;

    const slideLeftKey = keyframes`
        0%, 100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(+50%);
        }
        50.1% {
            transform: translateX(-50%);
        }
    `;
    

    const slideRight = css`
        ${slideRightKey} 0.2s ease-in-out;
    `;


    const slideLeft = css`
        ${slideLeftKey} 0.2s ease-in-out;
    `;

    const prevPicture = () => {
        ImgSlider = styled.img`
        animation: ${slideLeft};
      `
        //slideshowCtn.style = slideLeft
        setTimeout(switchPrevPicture,100);
        //setTimeout(show,200)
    }

    const nextPicture = () => {
        ImgSlider = styled.img`
        animation: ${slideRight};
      `
        setTimeout(switchNextPicture,100);
        //setTimeout(show,200)
    }

    const switchPrevPicture = () => {
        //slideshowCtn.style.transform = `translateX(${-100}%)`
        setCurrentPictureIndex(currentPictureIndex - 1)
        if (currentPictureIndex === 0) {
            setCurrentPictureIndex(pictures.length - 1)
        };
    }

    const switchNextPicture = () => {
        //slideshowCtn.style.transform = `translateX(${+100}%)`;
        setCurrentPictureIndex(currentPictureIndex + 1)
        if (currentPictureIndex === pictures.length - 1) {
            setCurrentPictureIndex(0)
        }; 
    }

    /*const show = () => {
        slideshowCtn.style.transform = `translateX(${0}%)`;
    }*/


return (
    <div className={styles.slideshow}>
        {pictures.length > 1 && <>
            <p className={styles.slideshow__pictureCount}> {currentPictureIndex + 1}/{pictures.length}</p>
            <FaChevronLeft className={styles.slideshow__chevronPrev} onClick={prevPicture}/>
            <FaChevronRight className={styles.slideshow__chevronNext} onClick={nextPicture}/>
            </>
        }
        <ImgSlider src={actualPicture} className={styles.slideshow__picture}  alt=""/>
    </div>
    )     
}

export default Slideshow

//translateX(${-100}%)

//.animation = css`${slideRight} 0.4s ease-in-out`;

/*const slideRight = css`
animation: ${slideRightKey} 0.4s ease-in-out;
`;

const slideLeft = css`
animation: ${slideLeftKey} 0.4s ease-in-out;
`;*/