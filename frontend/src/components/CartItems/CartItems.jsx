import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../assets/remove_icon.png'
import ShopContext  from '../../context/ShopContext'



const CartItems = () => {
  const{getTotalCartAmout,all_product,cartItems,removeFromCart} = useContext(ShopContext);
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
          <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*[e.id]}</p>
            <img className='cartitmes-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
          </div>
          <hr /> 
        </div>
        }
        return null;
      })}
      <div className="cartitmes-down">
        <div className="cartitmes-total">
          <h1>Totals Panier</h1>
          <div>
            <div className="cartitmes-total-item">
              <p>Total</p>
              <p>€{getTotalCartAmout()}</p>
              <hr />
              <div className="cartitmes-total-item">
                <p>Frais d'expédition</p>
                <p>Gratuit</p>
              </div>
              <hr />
              <div className="cartitmes-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmout()}</h3>
              </div>
            </div>
            <button>Passer en caisse</button>
          </div>
          <div className="cartitems-promocode">
            <p>Code promo</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='Code' />
              <button>Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItems