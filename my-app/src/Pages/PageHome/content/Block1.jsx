import PhotoA from "../../../assets/images/HomePage/photo1.jpg"
import PhotoB from "../../../assets/images/HomePage/photo2.jpg"
import "../../PageHome/Block1.css"
export default function Block1(){
    return(
        <container id="containerBlock1">
            <div id="Block1">
                <img src={PhotoA} id="PhotoA"></img>
                <img src={PhotoB} id="PhotoB"></img>
                <p id="block1text">
                Create your own <br></br>Comfort and beauty<br></br> of soul.
                </p>
                <hr id="lineBlock1"></hr>
            </div>
        </container>
    )
}