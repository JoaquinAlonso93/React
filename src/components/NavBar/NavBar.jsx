import "./NavBar.css";
import logo from "../../assets/logo-title.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (

        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="Logo de la marca" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-item" >
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item" >
                    <a href="#">Chocolates</a>
                </li>
                <li className="navbar-item" >
                    <a href="#">Golosinas</a>
                </li>
            </ul>
            <CartWidget />
        </nav>

    )
}

export default NavBar