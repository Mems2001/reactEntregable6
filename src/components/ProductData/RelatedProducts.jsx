import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Home/ProductCard'

const RelatedProducts = ({prodData , setProdId , loadCart}) => {

    const [prodByCategory, setprodByCategory] = useState()

    const allProd = useSelector(state => state.productsSlice)

    useEffect (
        () => {
            if (prodData) {

                const filter = allProd?.filter ( e => e.category.name == prodData.category )
                setprodByCategory(filter)
            }
        } , [prodData]
    )

    console.log(prodData)

    // console.log (prodByCategory)

  return (
    <div className='mainRelatedCont'>
        <h2>Related Products</h2>
    <div className='relatedContainer'>
        {prodByCategory?.map(
            prod => {
                if (prod.title != prodData?.title) {
            return <ProductCard 
            key={prod.id}
            prod={prod} 
            setProdId={setProdId} 
            loadCart={loadCart}/>
                }
        }
        )}
    </div>
    </div>
  )
}

export default RelatedProducts