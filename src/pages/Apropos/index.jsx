import { useLocation } from "react-router-dom"


function Apropos() {
    const sampleLocation = useLocation();

    return (
        <div>
            <h1>A Propos</h1>
            <p>"url = {sampleLocation.pathname}"</p> 
        </div>
    )
}

export default Apropos