import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utilities/getConfig.js'
import PurchaseCard from '../Purchases/PurchaseCard.jsx'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect (
    () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

      axios.get (URL , getConfig ())
      .then (res => {
        console.log(res.data.data.purchases)
        setPurchases(res.data.data.purchases)
      })
      .catch (err => console.log(err))
    } , []
  )

  return (
    <div>
      <ul>
        {purchases?.map(
          purchase => <li>
            <PurchaseCard key={purchase.id} purchase={purchase} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Purchases