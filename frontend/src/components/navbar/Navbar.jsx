import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.jpeg';
import cart_icon from '../assets/cart.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Surf Shop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/'>Boutique</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Homme</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}}to='/womens'>Femme</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}to='/kids'>Enfants</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem("auth-token")?
                <button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Déconnexion</button>
                :<Link to='/login'><button>Connexion</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}

export default Navbar