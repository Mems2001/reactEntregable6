import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utilities/getConfig.js'

const ProductCard = ({prod , setProdId , loadCart}) => {

  const cartProd = useSelector(state => state.cartSlice)

  const [backImg, setBackImg] = useState(true)

  const navigate = useNavigate ()

  const hover = () => {
    setBackImg (!backImg)   
  }

  const hover2 = () => {
    setBackImg (!backImg)
  } 

  // const showDet = () => {
  //   setShowDetails(!showDetails)
  //   setProdId( `${prod.id}` )
  // }

  const goToProd = () => {
    setProdId ( `${prod.id}` )
    navigate (`/product/${prod.id}`)
  }

  const addProd = e => {

    e.stopPropagation()

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

      const obj = {
        id: prod.id ,
        quantity: 1
      }

      axios.post (URL , obj , getConfig())
      .then (res => {
        loadCart ()
      })
      .catch(err => console.log(err))

  }
      

  // console.log (cartProd)
  // console.log (prod)

  return (
    
    <article className='prodArticle' onClick={goToProd} 
    onMouseOver={hover} 
    onMouseOut={hover2}>
      <header className='prodHeader' >
        <img className={backImg ? 'prodImg' : 'prodImg1'} src={`${prod.productImgs[0]}`} />
        <img className={backImg ? 'prodImg1' : 'prodImg'} src={prod.productImgs[1]} />
      </header>
      <hr className='cardHr' />
      <div className='cardBody'>
        <h3>{prod.title}</h3>
        <section className='priceNadd'>
          <div>
            <h4>Price</h4>
            <div className='price'>{prod.price}</div>
          </div>
        <button onClick={addProd} className='cartBtn1'>Add</button>
        </section>
      </div>
    </article>
    
  )
}

export default ProductCard