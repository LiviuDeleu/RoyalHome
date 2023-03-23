import "../../PageHome/Block3.css"
import Photo6 from "../../../assets/images/HomePage/photo6.jpg"
import Item1 from "../../../assets/images/HomePage/item1.png"
import Item2 from "../../../assets/images/HomePage/item2.png"
import Item3 from "../../../assets/images/HomePage/item3.png"
import Item4 from "../../../assets/images/HomePage/item4.png"

export default function Block3(){
    return(
        <container id="containerBlock3">
            <div id="Block3">
                <img src={Photo6} id="Photo6"></img>
                <hr id="Block3LineGreen"/>
                <div id="ContainerIconBlocks">
                    <div className="items" id="item1">
                        <img src={Item1} id="Item1"></img>
                        <p className="ItemText">Our Goal</p>
                        <p id="Item1Text">Interiors provide customer focused,<br/>
                        design-led products and services, <br/>
                        procured and delivered.</p>
                        </div>
                        <div className="items" id="item2">
                        <img src={Item2} id="Item2"></img>
                        <p className="ItemText">Our Vision</p>
                        <p id="Item2Text">Interiors are the most intelligent,<br/>
                        innovative and industrious supplier <br/>
                        of furniture and accessories.</p>
                        </div>
                        <div className="items" id="item3">
                        <img src={Item3} id="Item3"></img>
                        <p className="ItemText">Our Mission</p>
                        <p id="Item3Text">Interiors provide a “one stop” <br/>
                        furnishing solution to the residential<br/>
                        property sector.</p>
                        </div>
                        <div className="items" id="item4">
                        <img src={Item4} id="Item4"></img>
                        <p className="ItemText">Our Values</p>
                        <p id="Item4Text">Interiors are a modern, ethical,,<br />
                        socially and environmentally <br/>
                        conscious business.</p>
                    </div>
                   
                </div> 
                <p id="Block3Text">Core to everything we do is our service. Products may change<br/>
                     with the seasons or requirements of the market but we'll always<br/>
                      aim to take the challenges and complexities of replenishment <br/>
                       and large-scale furnishing out of our clients' hands.</p>
            </div>
        </container>
    )
}