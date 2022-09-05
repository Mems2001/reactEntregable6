import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ProductCard from '../Home/ProductCard'

const Home = () => {

  const dispatch = useDispatch()

  useEffect (
    () => {
      dispatch(getAllProducts())
    }, []
  )

  const allProd = useSelector(state => state.productsSlice)

  return (
   <div>
    {allProd?.map (
      prod => <ProductCard 
      key={prod.id}
      prod={prod} />
    )}
   </div>
  )
}

export default Home