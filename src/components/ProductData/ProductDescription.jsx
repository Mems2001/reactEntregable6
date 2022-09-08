import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utilities/getConfig.js'

const ProductDescription = ( {prodData , loadCart} ) => {

    const cartProd = useSelector(state => state.cartSlice)

    const [quantity, setQuantity] = useState(0)

    const [filteredProd, setFilteredProd] = useState('')

    const addProd = () => {
        setQuantity (quantity + 1)
    }

    const delProd = () => {
        if (quantity > 0) {
        setQuantity (quantity - 1)
        }
    }

    const filter = cartProd ? cartProd.filter ( e => e.id == prodData?.id ) : ''

    useEffect (
        () => {

            console.log (filter)
            console.log(cartProd)
        } , [cartProd]
    )

    const handleAdd = () => {

        if (filter != '') {

            const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

            const obj = {
                id: prodData.id ,
                newQuantity: filter[0].productsInCart.quantity + quantity
            }

            axios.patch (URL , obj , getConfig())
            .then (res => {
                loadCart ()
                setQuantity(0)
            })
            .catch (err => console.log(err))

        } else {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const obj = {
            id: prodData.id ,
            quantity: quantity
        }

        axios.post (URL , obj , getConfig())
        .then (res => {
            loadCart ()
            setQuantity(0)
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
        <button onClick={handleAdd}>Add to cart</button>
    </section>
  )
}

export default ProductDescription