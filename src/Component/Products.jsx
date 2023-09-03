import React from 'react'
import MyCard from './MyCard'
import pro1 from '../assets/pro1.jpeg'
import pro2 from '../assets/box17img.jpg'
import pro3 from '../assets/box18img.jpg'
import pro4 from '../assets/box19img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Products = () => {
  return (
    <div style={{marginLeft:'15px',marginTop:'30px'}}>
        <h2>
            Cars
        </h2>
        <Container fluid>
            <Row>
                <Col>
                    <MyCard CardSrc={pro1} price="Rs 1,95,000" disc="Toyata belta from 2019" />
                </Col>
                <Col>
                  <MyCard CardSrc={pro2} price="Rs 2,95,000" disc="Toyata belta from 2019" />
                </Col>
                <Col>
                  <MyCard CardSrc={pro3} price="Rs 1,15,000" disc="Toyata belta from 2019" />
                </Col>
                <Col>
                  <MyCard CardSrc={pro4} price="Rs 2,15,000" disc="Honda CIvic belta from 2019" />
                </Col>
                
             </Row>
         </Container>


    </div>
  )
}

export default Products