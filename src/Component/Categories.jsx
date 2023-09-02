import React from 'react'
import Imgcomponent from './Imgcomponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mobile from '../assets/mobile.png'
import vechile from '../assets/vechile.png'
import property from '../assets/property.png'
import rent from '../assets/rent.png'
import bike from '../assets/bike.png'
import animals from '../assets/animals.png'
import books from '../assets/books.png'






const Categories = () => {
  return (
    <div style={{marginTop:'40px' ,width:'98%'}}>
        <h2>
            All Categories
        </h2>
        
        <Container fluid>
            <Row>
                <Col>
                    <Imgcomponent imgSrc={mobile} content={'Mobile'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={vechile} content={'Vechicle'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={property} content={'Property'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={rent} content={'Rent'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={bike} content={'Bike'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={animals} content={'Animals'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={books} content={'Books'}/>
                </Col>
                <Col>
                    <Imgcomponent imgSrc={books} content={'Books'}/>
                </Col>
             </Row>
         </Container>


     </div>
  )
}

export default Categories