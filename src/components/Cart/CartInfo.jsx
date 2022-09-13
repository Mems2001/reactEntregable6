import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utilities/getConfig.js'

const CartInfo = ({prod , loadCart , cartProd }) => {

  const [prodForCart, setProdForCart] = useState()

  useEffect (
    () => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${prod.id}`

      axios.get(URL)
      .then(res => {
        setProdForCart(res.data.data.product)
      })
      .catch(err => console.log(err))
    } , [prod]
  )

  // console.log(prodForCart)
  // console.log(cartProd)

    const removeProd = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${prod.id}`

        axios.delete (URL , getConfig())
        .then (res => {
            console.log(res.data)
            loadCart ()
         })
        .catch (err => console.log(err))
    }

    const handleAdd = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

      const obj = {
        id: prod.id ,
        newQuantity: prod.productsInCart.quantity + 1
      }

      // console.log(obj)

      axios.patch(URL, obj , getConfig ())
      .then (res => {
        console.log(res.data)
        loadCart ()
      })
      .catch (err => console.log(err))
    }

    const handleRemove = () => {

      if (prod.productsInCart.quantity > 1) {

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

      const obj = {
        id: prod.id ,
        newQuantity: prod.productsInCart.quantity - 1
      }

      // console.log(obj)

      axios.patch(URL, obj , getConfig ())
      .then (res => {
        console.log(res.data)
        loadCart ()
      })
      .catch (err => console.log(err))

    }
    }

  if (cartProd) {
  return (
    <article className='cartCards'>
      <header className='prodHeaderCart'>
        <h3>{prodForCart?.title}</h3>
        <img className='cartImgs' src={prodForCart?.productImgs[0]} />
      </header>
      <section className='priceNadd'>
        <div>
          <h4>Price</h4>
          <div className='price'>
            { prod.productsInCart.quantity * prod.price }
          </div>
        </div>
        <div>
          <h4>Quantity</h4>
          <div className='quantity'>
            <button className='arrowBtn' onClick={handleRemove}>
            <i className="fa-solid fa-caret-left"></i>
            </button>
            <span> {prod.productsInCart.quantity} </span>
            <button className='arrowBtn' onClick={handleAdd}>
            <i className="fa-solid fa-caret-right"></i>
            </button>
            </div>
        </div>
      </section>
        <button className='deleteBtn' onClick={removeProd} >
        <i className="fa-solid fa-trash-can"></i>
        </button>
    </article>
  ) }
  else {
    return (
      <div>
        No products selected
      </div>
    )
  }
}

export default CartInfo