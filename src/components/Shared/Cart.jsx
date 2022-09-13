import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../store/slices/cart.slice'
import getConfig from '../../utilities/getConfig.js'
import CartInfo from '../Cart/CartInfo'

const Cart = ({ loadCart }) => {

  const [priceSum, setPriceSum] = useState(0)

  let partialSum = 0

  const cartProd = useSelector(state => state.cartSlice)

  const dispatch = useDispatch()

  useEffect (
    () => { 
      if (cartProd) {

        loadCart ()

      }
    } , []
  )

  useEffect (
    () => {

      if (cartProd != null)
      for (let i=0 ; i < cartProd.length ; i++) {
        // console.log(cartProd[i].price)
        partialSum = partialSum + (parseInt(cartProd[i].price) * parseInt(cartProd[i].productsInCart.quantity))
      }

      setPriceSum(partialSum)
    } , [cartProd]
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
          prod => <CartInfo 
          key={prod.id}
          prod={prod} 
          loadCart={loadCart} 
          cartProd={cartProd}
          />
        ) }
      </div>
      <div>
        <h4>Total price:</h4>
        <span>{priceSum}</span>
      </div>
      <button className='checkoutBtn' onClick={checkOut} >
      <i className="fa-solid fa-money-bill"></i>
      </button>
    </section>
  )
}

export default Cart