import React from 'react'
import List from './List'
import iconapple from '../assets/iconAppStoreEN.png'
import icongoogle from '../assets/iconGooglePlayEN.png'
import icongarllery from '../assets/iconAppGallery.png'
import twiter from '../assets/iconTwitter.png'
import facebook from '../assets/iconFacebook.png'
import play from '../assets/iconYoutube.png'
import insta from '../assets/iconInstagram.png'




const Footer = () => {
  return (
    <div className='mt-[30px] bg-[#f7f8f8] h-[180px]'>
        <div className='flex ml-[0%] mt-[2%]'> 
        <List heading="POPULAR CATEGORIES" li1="Cars" li2="Flats for rent" li3="Mobile Phones" li4="Jobs"/>
        <List heading="TRENDING SEARCHES" li1="Bike" li2="Watches" li3="Books" li4="Dogs"/>
        <List heading="ABOUT US" li1="Olx Blogs" li2="Contact Us" li3="Mobile Phones" li4="Jobs"/>
        <List heading="OLX" li1="Help" li2="Use" li3="Site Map" li4="Privacy policy"/>
        <div className='ml-[6%]'>
          <p className='text-font1 font-bold text-[14px] mt-[12px]'>FOLLOW US</p>
          <div className='flex h-[26px] gap-1'>
            <img className='w-[100%] h-[100%]' src={twiter} alt="" />
            <img className='w-[100%] h-[100%]' src={facebook} alt="" />
            <img className='w-[100%] h-[100%]' src={play} alt="" />
            <img className='w-[100%] h-[100%]' src={insta} alt="" />
          </div>
          <div className='h-[28px] flex w-[98px] gap-2 mt-[30px]'><img className='h-[100%]' src={iconapple} alt="" />
          <img className='h-[100%]' src={icongoogle} alt="" />
          <img className='h-[100%]' src={icongarllery} alt="" /></div>
        </div>
        </div>
    </div>
  )
}

export default Footer