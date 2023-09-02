import React from 'react'
import arrowIcn from '../assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg' 

const Header = () => {
  return (
    <div style={{border:'1px solid grey', height:'50px' }}>
      <ul style={{ listStyle:'none',display:'flex',gap:'15px' ,alignItems:'center'}}>
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