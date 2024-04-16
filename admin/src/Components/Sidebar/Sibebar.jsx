import React from 'react'
import './Sibebar.css'
import {Link} from 'react-router-dom'
import Product_Cart from '../../assets/Product_Cart.svg'
import Product_list_icon  from '../../assets/Product_list_icon.svg'

const Sibebar = () => {
  return (
    <div className='sibebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sibebar-item">
                <img src={Product_Cart} alt="" />
                <p>Ajouter Produits</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sibebar-item">
                <img src={Product_list_icon} alt="" />
                <p>liste des produits</p>
            </div>
        </Link>
    </div>
  )
}
export default Sibebar