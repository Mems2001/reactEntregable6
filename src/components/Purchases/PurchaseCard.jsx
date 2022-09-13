import React, { useEffect, useState } from 'react'
import PurchaseCardInfo from './PurchaseCardInfo'

const PurchaseCard = ({purchase}) => {

    const [pricesSum, setPricesSum] = useState()

    const [purchaseDate, setPurchaseDate] = useState()

    let sum = 0

    for (let i=0 ; i < purchase.cart.products.length ; i++) {
        sum = sum + (purchase.cart.products[i].price * purchase.cart.products[i].productsInCart.quantity)
    }
    
    useEffect (
        () => {
            setPurchaseDate(new Date(purchase.updatedAt))

            setPricesSum(sum)

        } , [sum, purchase]
    )
    // console.log(pricesSum)
    // console.log(purchase)
    // console.log(purchaseDate)

  return (
    <div className='purchaseCard'>
        <header className='purchaseHeader'>
            <h3>{purchase.cart.status}</h3>
            {/* <h3>{purchase.id}</h3> */}
            <h3>{purchaseDate?.getHours()}:{purchaseDate?.getMinutes()<10 ? `0${purchaseDate?.getMinutes()}` : purchaseDate?.getMinutes() } - {purchaseDate?.getUTCDate()<10 ? `0${purchaseDate?.getUTCDate()}` : purchaseDate?.getUTCDate() } / {purchaseDate?.getMonth()<10 ? `0${purchaseDate?.getMonth()}` : purchaseDate?.getMonth() } / {purchaseDate?.getUTCFullYear()}</h3>
        </header>
        <div className='purchaseProds'>
            {purchase.cart.products.map(
                object => <PurchaseCardInfo 
                key={object.id}
                object={object} 
                 />
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