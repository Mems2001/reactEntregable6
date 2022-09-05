import React from 'react'

const ProductCard = ({prod}) => {
  return (
    <div>
        <img src={prod.productImgs[0]} />
        <div>{prod.title}</div>
        <p>{prod.description}</p>
        <div>{prod.price}</div>
    </div>
  )
}

export default ProductCard