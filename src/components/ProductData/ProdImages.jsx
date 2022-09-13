import React, { useState } from 'react'

const ProdImages = ( {prodData} ) => {

    const [imgNumber, setImgNumber] = useState(0)

    const nextImg = () => {
        if (imgNumber < 2) {
            setImgNumber (imgNumber + 1)
        }
    }

    const prevImg = () => {
        if (imgNumber > 0) {
            setImgNumber (imgNumber - 1)
        }
    }

  return (
    <div className='prodImages'>
        <div className='mainImgContainer'>
            <button className='imgsBtn1' onClick={prevImg}>
                <i className="fa-solid fa-caret-left"></i>
            </button>
            <img className='mainImg' src={prodData?.productImgs[`${imgNumber}`]} />
            <button className='imgsBtn2' onClick={nextImg} >
                <i className="fa-solid fa-caret-right"></i>
            </button>
        </div>
        <div className='secondaryImgsContainer'>
            {prodData?.productImgs.map (
                img => <img className={`secondaryImgs ${prodData?.productImgs.indexOf(`${img}`) == imgNumber ? 'activeImg' : 'inactiveImg' }`} src={img} />
            )}
        </div>
    </div>
  )
}

export default ProdImages