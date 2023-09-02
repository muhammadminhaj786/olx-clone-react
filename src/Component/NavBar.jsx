import React from 'react'
import olx1 from '../assets/OLX-Logo.png'
import style from './NavBar.css'
import olx2 from '../assets/OLX-Symbol.png'
import carIcn from '../assets/car icon.png'
import pretyIcn from '../assets/perty icon.jpg'

const NavBar = () => {
  return (
    <div style={{backgroundColor:'#f7f8f8'}}>
        <div className="first">
          <ul>
            <li><img src={olx1}
            height={'30px'} alt="" /></li>
            <li> 
              <div style={{display:'flex' ,alignItems:'center',gap:'5px'}}>
              <img src={carIcn} 
              height={'20px'}
              alt="" />
              Motors  
              </div>  
            </li>
            <li> 
              <div style={{display:'flex' ,alignItems:'center',gap:'5px'}}>
              <img src={pretyIcn} 
              height={'20px'}
              alt="" />
              Property  
              </div>  
            </li>
          </ul>
        </div>
        <div className="second">
        <ul>
            <li><img src={olx2}
            height={'40px'} alt="" /></li>
            <li><input type="text" style={{width:'250px',height:'40px', border:'3px solid black'}}  placeholder='Search'/></li>
            <li><input type="text" style={{width:'500px',height:'40px', border:'3px solid black'}} /></li>
            <li>Login</li>
            <li>Sell </li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar