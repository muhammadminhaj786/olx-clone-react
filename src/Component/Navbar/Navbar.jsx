import React from 'react'
import olx1 from '../../assets/OLX-Logo.png'
import olx2 from '../../assets/OLX-Symbol.png'
import carIcn from '../../assets/car icon.png'
import pretyIcn from '../../assets/perty icon.jpg'
import bgi from '../../assets/iconSellBorder.png'
import serachIcn from '../../assets/search icon.png'
import * as Unicons from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
import bgii from '../../assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='bg-[#f7f8f8] h-[135px] fixed w-full top-0 z-10 '>
        <div className="first mt-3 h-[60px] w-[80%] mx-auto">
          <ul className='flex list-none items-center gap-7'>
            <li><img className='h-[20px]' src={olx1} alt="" /></li>
            <li> 
              <div className='flex items-center gap-1'>
              <img className='h-[15px]' src={carIcn}
              alt="" />
              Motors  
              </div>  
            </li>
            <li> 
              <div className='flex items-center gap-1'>
              <img className='h-[20px]' src={pretyIcn}
              alt="" />
              Property  
              </div>  
            </li>
          </ul>
        </div>
        <div className="second w-[80%] mx-auto">
        <ul className='flex gap-6 list-none items-center'>
            <li><img className='h-[35px]' src={olx2} alt="" /></li>
            <li><input type="text" className='p-2' style={{width:'250px',height:'52px', border:'3px solid black'}}  placeholder='Search'/></li>
            <li className='flex'><input className='p-2' type="text" style={{width:'420px',height:'52px', border:'3px solid black'}} placeholder='Find Cars, Mobiles, and more...'  />
            <div className='py-2' style={{backgroundColor:'black',width:'50px'}}>
              <Unicons.UilSearch  color='white' size='30px' />
            </div>
            </li>
            <li className='font-bold'>Login</li>
            <li className=" font-bold border border-image border-image-source url('D:\work\practise\olx clone\olx-clone-react\frontend\src\assets\iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg')">
              {/* <img src={bgii} alt="" /> */}
              Sell </li>
            <li><img src="" alt="" /></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar