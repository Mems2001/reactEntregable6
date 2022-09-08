import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ProductCard from '../Home/ProductCard'

const Home = ({ prodId , setProdId , loadCart }) => {

  const dispatch = useDispatch()

  useEffect (
    () => {
      dispatch(getAllProducts())
      setProdId()
    }, []
  )

  const allProd = useSelector(state => state.productsSlice)

  // console.log (prodId)

  return (
   <div className='prodContainer'>
    {allProd?.map (
      prod => <ProductCard 
      key={prod.id}
      prod={prod} 
      setProdId={setProdId} 
      loadCart={loadCart} />
    )}
  
   </div>
  )
}

export default Home