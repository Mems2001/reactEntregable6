import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartInfo from '../Cart/CartInfo'

const Cart = () => {

  const [cartProd, setCartProd] = useState()

  useEffect (
    () => { 

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }

      // console.log (localStorage.getItem('token'))

      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`

      axios.get(URL , config)
      .then (res => {
        setCartProd (res.data) 
      })
      .catch (err => console.log (err))

    } , []
  )

  console.log (cartProd)

  return (
    <section className='cartCard'>
      <CartInfo />
      <CartInfo />
    </section>
  )
}

export default Cart