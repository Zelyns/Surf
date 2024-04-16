import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"woman",
        new_price:"",
        old_price:"",
    })
    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.traget.name]:e.traget.props})
    }
    const Add_product = async()=>{
        console.log(productDetails);
    }
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Titre du produit :</p>
            <input props={productDetails.name} onChange={changeHandler} type="text" name='name'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Prix :</p>
                <input  props={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' />
            </div>
            <div className="addproduct-itemfield">
                <p>Prix ​​de l'offre :</p>
                <input props={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' />
            </div>
        </div>
        <div className="addproduct-itemfield">
                <p>Categorie du Produit :</p>
                <select  props={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">men</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            
            <div className="addproduct-itemfield-field">
                <label htmlFor="file-input">
                    {/* <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" /> */}
                    <input onChange={imageHandler} type="file" name='image' is='file-input'/>
                </label>
                
            </div>
            <button onClick={()=>{Add_product}} className='addproduct-btn'>Ajouter</button>
    </div>
  )
}
export default AddProduct