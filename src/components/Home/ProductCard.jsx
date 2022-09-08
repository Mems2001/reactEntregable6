import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utilities/GetConfig'

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

      loadCart ()

      if (cartProd) {

      for (let i=0 ; i < cartProd.length ; i++) {
        if ( cartProd[i].id == prod.id ) {
          console.log ('eureka')
          const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const obj1 = {
          id: cartProd[i].id ,
          newQuantity: cartProd[i].productsInCart.quantity + 1
        }

        axios.patch (URL, obj1 , getConfig())
        .then (res => {
          console.log(res.data)
          loadCart ()
        })
        .catch (err => console.log(err))

        break
        } else {
          continue
        }
      }

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const obj = {
          id : prod.id ,
          quantity : 1
        }
  
        axios.post (URL, obj, getConfig())
        .then (res => {
          console.log(res.data)
          loadCart ()
        })
        .catch (err => console.log(err))

     } else {
      

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const obj = {
          id : prod.id ,
          quantity : 1
        }
  
        axios.post (URL, obj, getConfig())
        .then (res => {
          console.log(res.data)
          loadCart ()
        })
        .catch (err => console.log(err))

    }
  }
      

  // console.log (cartProd)
  // console.log (prod)

  return (
    <div className='majorCont-prod'>
    <article className='prodArticle' onClick={goToProd} 
    onMouseOver={hover} 
    onMouseOut={hover2}>
      {/* <button className='detailsBtn' onClick={showDet}>Show Details</button> */}
      <header className='prodHeader' >
        <img className={backImg ? 'prodImg' : 'prodImg1'} src={`${prod.productImgs[0]}`} />
        <img className={backImg ? 'prodImg1' : 'prodImg'} src={prod.productImgs[1]} />
      </header>
      <div className='cardBody'>
        <h3>{prod.title}</h3>
        <section className='priceNadd'>
          <div>
            <h4>Price</h4>
            <div className='price'>{prod.price}</div>
          </div>
        <button onClick={addProd} className='cartBtn1'>Add</button>
        </section>
        {/* <div>
          { readMore && <p>{prod.description}</p> }
        </div> */} 
      </div>
    </article>
    </div>
  )
}

export default ProductCard