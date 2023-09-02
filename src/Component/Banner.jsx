import React from 'react'
import bannerPic from '../assets/bannerImg.jpeg'

const Banner = () => {
  return (
    <div style={{height:'200px' ,width:'90%', margin:'2% auto'}}>
      <img src={bannerPic}
      height={'100%'}
      width={'100%'} alt="" />
    </div>
  )
}

export default Banner