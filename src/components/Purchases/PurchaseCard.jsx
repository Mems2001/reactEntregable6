import React, { useEffect, useState } from 'react'

const PurchaseCard = ({purchase}) => {

    const [pricesSum, setPricesSum] = useState()

    let sum = 0

    for (let i=0 ; i < purchase.cart.products.length ; i++) {
        sum = sum + (purchase.cart.products[i].price * purchase.cart.products[i].productsInCart.quantity)
    }
    
    useEffect (
        () => {
            setPricesSum(sum)
        } , [sum]
    )
    // console.log(pricesSum)

  return (
    <div className='purchaseCard'>
        <header className='purchaseHeader'>
            <h3>{purchase.cart.status}</h3>
            <h3>{purchase.updatedAt}</h3>
        </header>
        <div className='purchaseProds'>
            {purchase.cart.products.map(
                object => <div className='prodsPurchased'> 
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
            )}
        </div>
        <footer className='totalPrice'>
            <h4>Total price:</h4>
            <span>
                {pricesSum}
            </span>
        </footer>
    </div>
  )
}

export default PurchaseCard