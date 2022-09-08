import axios from 'axios'
import React from 'react'
import getConfig from '../../utilities/GetConfig'

const CartInfo = ({prod , loadCart}) => {

    const removeProd = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${prod.id}`

        axios.delete (URL , getConfig())
        .then (res => {
            console.log(res.data)
            loadCart ()
         })
        .catch (err => console.log(err))
    }

  return (
    <article className='cartCards'>
        <div>{prod.title}</div>
        <div>cantidad: {prod.productsInCart.quantity}</div>
        <div>precio: { prod.productsInCart.quantity * prod.price }</div>
        <button onClick={removeProd} >eliminar</button>
    </article>
  )
}

export default CartInfo