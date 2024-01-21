import React from 'react'
import bannerPic from '../assets/bannerImg.jpeg'

const Banner = () => {
  return (
  <div className='w-[95%] rounded h-[100%] mx-auto mt-3'><img className='w-[100%] h-[100%] rounded' src={bannerPic} alt="" /></div>
  )
}

export default Banner