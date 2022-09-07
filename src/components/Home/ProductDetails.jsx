import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductDetails = ({ setShowDetails , showDetails , setProdId , prodId}) => {

    const hideDet = () => {
        setShowDetails (!showDetails)
        setProdId ()
        setImgNumber (0)
    }

    const [prodForDetails, setProdForDetails] = useState()

    const [imgNumber, setImgNumber] = useState(0)

    useEffect (
        () => {
            if (prodId) {

            const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${prodId}`

            axios.get (URL)
            .then (res => setProdForDetails(res.data.data.product))
            .catch (err => console.log(err))

            }
        } , [prodId]
    )

    const prevImg = () => {
        if (imgNumber > 0) {
            setImgNumber ( imgNumber - 1 ) 
        }
    }

    const nextImg = () => {
        if (imgNumber < 2) {
            setImgNumber ( imgNumber + 1 )
        }
    }

    console.log (prodForDetails)

  return (
    <div className={`detailsCard show-${showDetails}`}>
        <div className='emergingBackground'></div>
        <article className='prodCard2'>
            <h1>{prodForDetails?.title}</h1>
            <div className='detailsImages'>
                <button className='detailsBtn1' onClick={prevImg} >Prev</button>
                <img className='imgDetails' src={prodForDetails?.productImgs[imgNumber]} />
                <button className='detailsBtn2' onClick={nextImg}>Next</button>
            </div>
            <div className='detailsInfo'>
                <p className='detailsText'>{prodForDetails?.description}</p>
            </div>
            <button className='closeBtn' onClick={hideDet}>close</button>
        </article>
        
    </div>
  )
}

export default ProductDetails