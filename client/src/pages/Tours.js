import React from 'react'
import CountryBar from '../components/CountryBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TourTypeBar from '../components/TourTypeBar'
import TourList from '../components/TourList'
import NavBar from '../components/NavBar'

import { observer } from 'mobx-react-lite'




const Tours = observer(() => {
    
    return (
        <>
        <NavBar/>
     <div className="tours">
        <Container>

            <Row style={{backgroundColor:'white', borderRadius:'1rem',boxShadow:'5px 4px 39px 0px rgba(101, 94, 89, 0.13)'}}>
                <Col md={2}>
                    <CountryBar />
                    <TourTypeBar />
                  
  
                </Col>
                <Col md={10}>
                    <TourList/>    

                </Col>
            
            </Row>
        </Container>
     </div>
    </>
    )
})

export default Tours
