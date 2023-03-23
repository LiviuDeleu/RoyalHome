import "../../PageHome/Block4.css"
import Photo7 from "../../../assets/images/HomePage/photo7.jpg"
import Photo8 from "../../../assets/images/HomePage/photo8.png"
import Photo9 from "../../../assets/images/HomePage/photo9.jpg"
import Photo10 from "../../../assets/images/HomePage/photo10.jpg"
import Instagram from "../../../assets/images/HomePage/instagram.png"
import Facebook from "../../../assets/images/HomePage/facebook.png"
import Google from "../../../assets/images/HomePage/google.png"

export default function Block4(){
    return(
        <container id="containerBlock4">
            <div id="Block4">
                <div id="Block4BlackBlock">
                    <img src={Photo7} id="Photo7"></img>
                    <p id="TextBlock4">
                        We Deliver.<br/>
                        We Assemble.<br/>
                        We Install. <br/>
                        We Recycle.
                    </p>
                </div>
                <div id="Block4GreenBlock">
                    <p id="Block4Text">
                    TESTIMONIALS
                    </p>
                    <p id="Block4BlockGreenText">
                    As we've grown in size our service offering and added value elements have <br/>
                    grown and developed alongside us as we continue to improve and take <br/>
                    responsibility for everything we do from product sourcing to logistics,<br/>
                    delivery and installations.Core to everything we do is our service.<br/>
                    Products may change with the seasons or requirements of the market but we'll <br/>
                    always aim to take delivery and installations.
                    Core to everything w the challenges and <br/>
                    complexities of replenishment and large-scale furnishing out of our clients' hands.
                    </p>
                </div>
                <img src={Photo8} id="Photo8"></img>
                <img src={Photo9} id="Photo9"></img>
                <img src={Photo10} id="Photo10"></img>
                <div id="Block4YellowBlock"></div>
                <div id="Block4BlackBlock2">
                    <p id="Block4BlackBloc2Text">SOICAL MEDIA</p>
                    <img src={Instagram}className="SocialIcons" ></img>
                    <p id="SocialText1">royal.home</p>
                    <img src={Facebook} className="SocialIcons"></img>
                    <p id="SocialText2">royal-home</p>
                    <img src={Google} className="SocialIcons"></img>
                    <p id="SocialText3">royal.home@gmail.com</p>
                </div>
            </div>
        </container>
    )
}