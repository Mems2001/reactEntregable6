import React, { useState } from 'react'

const ProductDescription = ( {prodData} ) => {

    const [quantity, setQuantity] = useState(0)

    const addProd = () => {
        setQuantity (quantity + 1)
    }

    const delProd = () => {
        if (quantity > 0) {
        setQuantity (quantity - 1)
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
        <button>Add to cart</button>
    </section>
  )
}

export default ProductDescription