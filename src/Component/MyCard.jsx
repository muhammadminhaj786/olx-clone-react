import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
  let {CardSrc, price, disc} = props
  return (
    <div style={{marginLeft:'2%' ,marginTop:"30px"}}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardSrc} height={'270px'}/>
      <Card.Body>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
          {disc}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default MyCard