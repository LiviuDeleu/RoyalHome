import "../../PageHome/Block3.css"
import Photo6 from "../../../assets/images/HomePage/photo6.jpg"
export default function Block3(){
    return(
        <container id="containerBlock3">
            <div id="Block3">
                <img src={Photo6} id="Photo6"></img>
                <hr id="Block3LineGreen"/>
                <div id="ContainerIconBlocks">
                    <div className="items" id="item1">
                        
                    </div>
                    <div className="items" id="item2">

                    </div>
                    <div className="items" id="item3">

                    </div>
                    <div className="items" id="item4">

                    </div>
                </div>
            </div>
        </container>
    )
}