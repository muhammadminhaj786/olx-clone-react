import React from 'react'
import './List.css'
const List = (props) => {
    let {heading,li1,li2,li3,li4} = props
  return (
    <div style={{marginLeft:'7%',}}>
        <p className='mt-[12px] head' style={{fontWeight:'bold' ,fontSize:'14px'}}>{heading}</p>
        <div style={{marginLeft:'0%'}}>
            <ul style={{marginTop:'10px', fontSize:'1vw' ,listStyle:'none'}}>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
            </ul>
        </div>
    </div>
  )
}

export default List