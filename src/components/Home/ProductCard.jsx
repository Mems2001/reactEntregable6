import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({prod , setShowDetails , showDetails , setProdId}) => {

  // const [readMore, setReadMore] = useState(false)

  const [backImg, setBackImg] = useState(true)

  const navigate = useNavigate ()

  // const showDescription = () => {
  //   setReadMore (!readMore)
  // }

  const hover = () => {
    setBackImg (!backImg)   
  }

  const hover2 = () => {
    setBackImg (!backImg)
  } 

  const showDet = () => {
    setShowDetails(!showDetails)
    setProdId( `${prod.id}` )
  }

  const goToProd = () => {
    setProdId ( `${prod.id}` )
    navigate (`/product/${prod.id}`)
  }

  return (
    <article className='prodArticle' onMouseOver={hover} onMouseOut={hover2}>
      <button className='detailsBtn' onClick={showDet}>Show Details</button>
      <header className='prodHeader' >
        <img className={backImg ? 'prodImg' : 'prodImg1'} src={`${prod.productImgs[0]}`} />
        <img className={backImg ? 'prodImg1' : 'prodImg'} src={prod.productImgs[1]} />
      </header>
      <div className='cardBody'>
        <h3>{prod.title}</h3>
        <section>
          <h4>Price</h4>
        <div className='price'>{prod.price}</div>
        </section>
        {/* <div>
          { readMore && <p>{prod.description}</p> }
        </div> */}
        <button onClick={goToProd} >See more</button>
      </div>
    </article>
  )
}

export default ProductCard