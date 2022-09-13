import React, { useState } from 'react'

const ProdImagesMob = ({prodData}) => {

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
    <div className='imagesContainerMob'>
        <button className='sliderBtn' onClick={prevImg} >
            <i className="fa-solid fa-caret-left"></i>
        </button>
        <div className={`imgsContainer2`}>
            <img className='imgsMobile' src={prodData?.productImgs[imgNumber]} />
        </div>
        <button className='sliderBtn' onClick={nextImg} >
            <i className="fa-solid fa-caret-right"></i>
        </button>
    </div>
  )
}

export default ProdImagesMob