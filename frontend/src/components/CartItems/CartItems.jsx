import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../assets/remove_icon.png'
import ShopContext  from '../../context/ShopContext'



const CartItems = () => {
  const{all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Produit</p>
        <p>Titre</p>
        <p>Prix</p>
        <p>Quantité</p>
        <p>total</p>
        <p>Retirer</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
          return <div>
          <div className="cartitems-format">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*[e.id]}</p>
            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
          </div>
          <hr /> 
        </div>
        }
      })}
    </div>
  )
}
export default CartItems