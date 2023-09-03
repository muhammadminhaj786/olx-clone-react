import React from 'react'
import List from './List'

const Footer = () => {
  return (
    <div style={{marginTop:'30px',backgroundColor:'#f7f8f8'}}>
        <div style={{display:'flex', marginLeft:'0%',marginTop:'2%'}}> 
        <List heading="POPULAR CATEGORIES" li1="Cars" li2="Flats for rent" li3="Mobile Phones" li4="Jobs"/>
        <List heading="TRENDING SEARCHES" li1="Bike" li2="Watches" li3="Books" li4="Dogs"/>
        <List heading="ABOUT US" li1="Olx Blogs" li2="Contact Us" li3="Mobile Phones" li4="Jobs"/>
        <List heading="OLX" li1="Help" li2="Use" li3="Site Map" li4="Privacy policy"/>

        </div>
    </div>
  )
}

export default Footer