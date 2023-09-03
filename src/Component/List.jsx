import React from 'react'

const List = (props) => {
    let {heading,li1,li2,li3,li4} = props
  return (
    <div style={{marginLeft:'6%',}}>
        <p style={{fontWeight:'bold' ,fontSize:'15px'}}>{heading}</p>
        <div style={{marginLeft:'0%'}}>
            <ul style={{marginTop:'10px' ,listStyle:'none'}}>
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