import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProdImages from '../ProductData/ProdImages'
import ProductDescription from '../ProductData/ProductDescription'

const ProductData = ( ) => {

  const { id } = useParams ()

  const [prodData, setProdData] = useState()

  useEffect (
    () => {

      if(id) {

      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`

      axios.get (URL)
      .then (res => setProdData(res.data.data.product))
      .catch (err => console.log(err)) }
    } , [id]
  
  )

  return (
    <div className='dataContainer'>
      <ProdImages prodData={prodData} />
      <ProductDescription prodData={prodData} />
    </div>
  )
}

export default ProductData