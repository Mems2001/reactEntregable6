import React from 'react'

const PurchaseCardInfo = ({object}) => {
  return (
    <div className='prodsPurchased'> 
        <span className='objectTitle'>{object.title}</span>
        <span className='purchaseQuant'>
            <h4>Quantity: </h4>
            <span>{object.productsInCart.quantity}</span>
        </span>
        <span className='indivPrice'>
            <h4>Individual price:</h4>
            <span>{object.price}</span>
        </span>
        <span className='parcialPrice'>
            <h4>Price:</h4>
            <span>
                {object.price * object.productsInCart.quantity}
            </span>
        </span>
    </div>
  )
}

export default PurchaseCardInfo