import styles from "./Slideshow.module.scss"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { useState } from "react"
import styled, { css, keyframes } from 'styled-components'

let ImgSlider = styled.img``
let PrevImgSlider = styled.img``
let NextImgSlider = styled.img``

function Slideshow ( {pictures} ) {

    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    const [nextPictureIndex, setNextPictureIndex] = useState("")
    const [prevPictureIndex, setPrevPictureIndex] = useState("")
    const actualPicture = pictures[currentPictureIndex]
    const nextActualPicture = pictures[nextPictureIndex]
    const prevActualPicture = pictures[prevPictureIndex]
    const [slideIsPlaying, setSlideIsPlaying] = useState(false);

    const slideLeftKey = keyframes`
        0%, 5% {
            transform: translateX(0);
        }
        90%, 100% {
            transform: translateX(+100%);
        }
    `;

    const slideRightKey = keyframes`
        0%, 5% {
            transform: translateX(0);
        }
        90%, 100% {
            transform: translateX(-100%);
        }
    `;

    const slideLeft = css`
        ${slideLeftKey} 0.8s ease-in-out;
    `;

    const slideRight = css`
        ${slideRightKey} 0.8s ease-in-out;
    `;

    const prevPicture = () => {
        setSlideIsPlaying(true);
        switchPrevImgSlider()
        ImgSlider = styled.img`
        animation: ${slideLeft};
        `
        PrevImgSlider = styled.img`
        animation: ${slideLeft};
        `
        setTimeout(switchPrevPicture, 750);
        setTimeout(setPrevPictureIndex, 850);
    }

    const nextPicture = () => {
        setSlideIsPlaying(true);
        switchNextImgSlider();
        ImgSlider = styled.img`
        animation: ${slideRight};
        `
        NextImgSlider = styled.img`
        animation: ${slideRight};
        `
        setTimeout(switchNextPicture, 750);
        setTimeout(setNextPictureIndex, 850);
    }

    const switchPrevImgSlider = () => {
        setPrevPictureIndex(currentPictureIndex - 1)
        if (currentPictureIndex === 0) {
            setPrevPictureIndex(pictures.length - 1)
        }; 
    }

    const switchNextImgSlider = () => {
        setNextPictureIndex(currentPictureIndex + 1)
        if (currentPictureIndex === pictures.length - 1) {
            setNextPictureIndex(0)
        };
    }

    const switchPrevPicture = () => {
        setCurrentPictureIndex(currentPictureIndex - 1)
        if (currentPictureIndex === 0) {
            setCurrentPictureIndex(pictures.length - 1)
        };
        ImgSlider = styled.img``
        PrevImgSlider = styled.img``
        setSlideIsPlaying(false);
    }

    const switchNextPicture = () => {
        setCurrentPictureIndex(currentPictureIndex + 1)
        if (currentPictureIndex === pictures.length - 1) {
            setCurrentPictureIndex(0)
        }; 
        ImgSlider = styled.img``
        NextImgSlider = styled.img``
        setSlideIsPlaying(false);
    }

return (
    <div className={styles.slideshow}>
        {pictures.length > 1 && <>
            <p className={styles.slideshow__pictureCount}> {currentPictureIndex + 1}/{pictures.length}</p>
            {slideIsPlaying ? <FaChevronLeft className={styles.slideshow__chevronPrev}/> : <FaChevronLeft className={styles.slideshow__chevronPrev} onClick={prevPicture}/>}
            {slideIsPlaying ? <FaChevronRight className={styles.slideshow__chevronNext}/> : <FaChevronRight className={styles.slideshow__chevronNext} onClick={nextPicture}/>}
            </>
        }
        <PrevImgSlider src={prevActualPicture} className={styles.slideshow__prevPicture}  alt="Previous slide picture"/>
        <ImgSlider src={actualPicture} className={styles.slideshow__picture}  alt="Actual slide picture"/>
        <NextImgSlider src={nextActualPicture} className={styles.slideshow__nextPicture}  alt="Next slide picture"/>
    </div>
    )     
}

export default Slideshow