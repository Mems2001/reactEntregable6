import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../store/slices/cart.slice'
import getConfig from '../../utilities/GetConfig'
import CartInfo from '../Cart/CartInfo'

const Cart = ({ loadCart }) => {

  const cartProd = useSelector(state => state.cartSlice)

  const dispatch = useDispatch()

  useEffect (
    () => { 
      if (cartProd) {

        loadCart ()

      }
    } , []
  )

  const checkOut = () => {
    if (cartProd) {

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

      const obj = {
        street: 'Manuel Serrano' ,
        colony: 'La concepción' ,
        zipCode: 123456 ,
        city: 'Quito' ,
        references: 'some references'
      }

      axios.post (URL , obj , getConfig ())
      .then (res => {
        console.log(res.data)
        dispatch (setCart (null))
        loadCart ()
      })
      .catch (err => console.log(err))

    }
  }

  // console.log (cartProd)

  return (
    <section className='cartCard'>
      <div className='cartProdCont'>
        { cartProd?.map(
          prod => <CartInfo prod={prod} loadCart={loadCart} cartProd={cartProd} />
        ) }
      </div>
      <button onClick={checkOut} >CheckOut</button>
    </section>
  )
}

export default Cart