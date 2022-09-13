import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ProductCard from '../Home/ProductCard'

const Home = ({ prodId , setProdId , loadCart }) => {

  const cartProd = useSelector (state => state.cartSlice)

  const dispatch = useDispatch()

  useEffect (
    () => {
      dispatch(getAllProducts())
      setProdId()

      if (cartProd) {
        loadCart()
      }

    }, []
  )

  const allProd = useSelector(state => state.productsSlice)

  // console.log (prodId)
  // console.log(cartProd)

  return (
   <div className='prodContainer'>
    {allProd?.map (
      prod => <ProductCard 
      key={prod.id}
      prod={prod} 
      setProdId={setProdId} 
      loadCart={loadCart} 
      cartProd={cartProd} />
    )}
  
   </div>
  )
}

export default Home