import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ProductCard from '../Home/ProductCard'
import ProductDetails from '../Home/ProductDetails'

const Home = ({ showDetails , setShowDetails , prodId , setProdId }) => {

  const dispatch = useDispatch()

  useEffect (
    () => {
      dispatch(getAllProducts())
    }, []
  )

  const allProd = useSelector(state => state.productsSlice)

  console.log (prodId)

  return (
   <div className='prodContainer'>
    {allProd?.map (
      prod => <ProductCard 
      key={prod.id}
      prod={prod} 
      setShowDetails={setShowDetails}
      showDetails={showDetails}
      setProdId={setProdId} />
    )}
    <ProductDetails 
    setShowDetails={setShowDetails}
    showDetails={showDetails}
    prodId={prodId}
    setProdId={setProdId} />
   </div>
  )
}

export default Home