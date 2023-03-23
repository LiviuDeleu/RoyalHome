import "../../PageHome/Block2.css"
import Photo3 from "../../../assets/images/HomePage/photo3.jpg"
import Photo4 from "../../../assets/images/HomePage/photo4.jpg"
import Photo5 from "../../../assets/images/HomePage/photo5.jpg"


export default function Block2(){
    return(
        
        <div id="Block2">
            <div id="Block2GreenBlock">
            <p id="Block2Text">
                ​Do you dream of a beautiful <br/>
                and comfortable interior? <br/>
                Make the right choice for your soul with us.
            ​</p>
            </div>
            <img src={Photo3} id="Photo3"></img>
            <hr id="LineBock2"></hr>
            <p id="BlockText2">
                ​In a few minutes you can <br/>
                choose your dream <br/>
                furniture!
             </p>
             <button id="ButtonBlock2">Read More</button>
             <img src={Photo4} id="Photo4"/>
             <p id="BlockText3">​OUR PRODUCTS ARE OF HIGH QUALITY, <br/>
                LONG-LASTING AND RELIABLE MATERIAL
             </p>
             <img src={Photo5} id="Photo5"/>
            <div id="Block2YellowBlock">
             <p id="BlockText4">
                EXTRAORDINARY <br/>
                DESIGN CABINETRY
             </p>
             <button id="ButtonBlock2Yellow">Read More</button>
            </div>
        </div>
    )
}