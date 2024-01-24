import React, { useState } from 'react'
import products from '../../api/products.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import './Productlist.css'
import { UseSelector, useSelector } from 'react-redux'

function Productlist() {

  const cart = useSelector((state) => state.cart)
  const [count , setCount]= useState(0);

  console.log(cart);

  const addToCart = ()=>{
    setCount(1)
  }

  return (
    <section className="container">
   
   {products?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>{/* <CartButtons product={product} /> */}
               { count > 0 ?  <AfterCart/> : <BeforeCart addToCart={addToCart}/>}
               
              
            </div>
         ))}

 </section>
  )
}

export default Productlist