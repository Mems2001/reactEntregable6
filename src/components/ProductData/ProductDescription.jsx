import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utilities/GetConfig'

const ProductDescription = ( {prodData , loadCart} ) => {

    const cartProd = useSelector(state => state.cartSlice)

    const [quantity, setQuantity] = useState(0)

    const addProd = () => {
        setQuantity (quantity + 1)
    }

    const delProd = () => {
        if (quantity > 0) {
        setQuantity (quantity - 1)
        }
    }

    const add2Cart = () => {

        if (cartProd) {

        for (let i=0 ; i < cartProd.length ; i ++) {
            if (cartProd[i].id == prodData?.id) {
                console.log ('eureka')

                const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

                const obj2= {
                    id: cartProd[i].id ,
                    newQuantity: cartProd[i].productsInCart.quantity + quantity
                }

                axios.patch (URL , obj2 , getConfig())
                .then (res => {
                    console.log (res.data)
                    loadCart ()
                    setQuantity (0)
                })
                .catch (err => console.log(err))

                break
            } else {
                continue
            }
        }

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const obj = {
            id : prodData?.id ,
            quantity : quantity
        }

        axios.post (URL , obj , getConfig())
        .then (res => {
            console.log(res.data)
            setQuantity (0)
            loadCart ()
        })
        .catch (err => console.log(err))
        } else {

            const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const obj = {
            id : prodData?.id ,
            quantity : quantity
        }

        axios.post (URL , obj , getConfig())
        .then (res => {
            console.log(res.data)
            setQuantity (0)
            loadCart ()
        })
        .catch (err => console.log(err))

        }
    }

  return (
    <section className='productDescription'>
        <h2>{prodData?.title}</h2>
        <p className='prodDText'>{prodData?.description}</p>
        <div className='priceNquantity'>
            <div className='priceBlock'>
                <h4>Price</h4>
                <span>$ {prodData?.price}</span>
            </div>
            <div>
                <h4>Quantity</h4>
                <div>
                    <button onClick={delProd}>-1</button>
                    <span>{quantity}</span>
                    <button onClick={addProd}>+1</button>
                </div>
            </div>
        </div>
        <button onClick={add2Cart}>Add to cart</button>
    </section>
  )
}

export default ProductDescription