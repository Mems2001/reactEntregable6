import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProdImages from '../ProductData/ProdImages'
import ProdImagesMob from '../ProductData/ProdImagesMob'
import ProductDescription from '../ProductData/ProductDescription'
import RelatedProducts from '../ProductData/RelatedProducts'

const ProductData = ( {loadCart , setProdId} ) => {

  const { id } = useParams ()

  const [prodData, setProdData] = useState()

  useEffect (
    () => {

      if (id) {

      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`

      axios.get (URL)
      .then (res => setProdData(res.data.data.product))
      .catch (err => console.log(err)) }
    } , [id]
  
  )

  // console.log(prodData)

  return (
    <div className='dataContainer'>
      <ProdImages prodData={prodData} />
      <ProdImagesMob prodData={prodData} />
      <ProductDescription prodData={prodData} loadCart={loadCart} />
      <RelatedProducts prodData={prodData} setProdId={setProdId} loadCart={loadCart} />
    </div>
  )
}

export default ProductData