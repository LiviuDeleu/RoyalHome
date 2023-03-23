
import './menu.css'
import Basket from "../../../src/assets/images/Menu/basket.png"
import Favorites from "../../../src/assets/images/Menu/heart.png"
import User from "../../../src/assets/images/Menu/user.png"
import Search from "../../../src/assets/images/Menu/search.png"
import { Link } from "react-router-dom";

export default function Header(){
    return (<>
            <div id="Menu">
                <Link to="ContactsPage"><button id='ButtonMenu'>Call Center</button></Link>
                <nav>
                    <Link to="/" id="TextYellow">Home</Link>
                    <Link to="ShopPage">Shop</Link>
                    <Link to="ContactsPage">Contacts</Link>
                </nav>
                <img src={Search} id="search"></img>
                <input type="text" placeholder="Search"></input>
                <container id="menuIcons">
                   <img src={Basket}/>
                   <img src={Favorites}/>
                   <img src={User}/>
                </container>
            </div>
    </>)

}