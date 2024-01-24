import React from 'react'
import arrowIcn from '../../assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg' 
import './Header.css'

const Header = () => {
  return (
    <div className='border h-[45px] w-[100%] mx-auto mt-[140px]'>
      <ul className='ctn mt-[6px] text-[1.2vw] list-none mx-auto w-[80%] flex gap-4 items-center'>
        <li>All Categories</li>
        <li><img src={arrowIcn} alt="" /></li>
        <li>Mobile Phones</li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Houses</li>
        <li>TV - Video - Audio</li>
        <li>Tablets</li>
        <li>Land & Plots</li>
      </ul>
    </div>
  )
}

export default Header