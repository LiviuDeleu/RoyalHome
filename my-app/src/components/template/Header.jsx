import { Container } from "react-bootstrap";
import './menu.css'
import Basket from "../../../src/assets/images/Menu/basket.png"
import Favorites from "../../../src/assets/images/Menu/heart.png"
import User from "../../../src/assets/images/Menu/user.png"
import Search from "../../../src/assets/images/Menu/search.png"

export default function Header(){
    return (
        <>
            <div id="Menu">
                <button>Call Center</button>
                <nav>
                    <a href="#" id="TextYellow">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Contacts</a>
                </nav>
                <img src={Search} id="search"></img>
                <input type="text" placeholder="Search"></input>
                <container id="menuIcons">
                   <img src={Basket}/>
                   <img src={Favorites}/>
                   <img src={User}/>
                </container>
            </div>
        </>
    )
}
