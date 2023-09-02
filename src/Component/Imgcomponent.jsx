import React from 'react'

const Imgcomponent = (props) => {
    let {imgSrc,content} = props
    
  return (
    <div style={{paddingLeft:'15px',width:'150px',marginLeft:'0%',marginTop:'30px'}}>
        <div className="ImgDiv" style={{height:'100px',margin:'0% auto',width:'90px'}}>
            <img src={imgSrc}
            height={'90px'}
            width={'100%'} alt="" />
        </div>
        <div className="ContentDiv">
            <h3 style={{fontSize:'1.5vw' ,textAlign:'center'}}>
                {content}
            </h3>
        </div>
    </div>
  )
}

export default Imgcomponent