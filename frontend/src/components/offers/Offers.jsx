import React from "react";
import './Offers.css';
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Offres</h1>
                <h1>Exclusive pour vous</h1>
                <p>SEULEMENT SUR LES MEILLEURS PRODUITS</p>
                <button>ALLEZ VOIR</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers;