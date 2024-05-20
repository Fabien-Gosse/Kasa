import Kasa_home from "../../assets/Kasa_home.jpg"

function Banner () {

    return (
        <div className="containerBanner">
            <img src={Kasa_home} alt="" className="imgBanner"/>
            <h2 className="titreBanner">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner