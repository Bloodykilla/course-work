import React, {useContext, useEffect} from 'react'
import CountryBar from '../components/CountryBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TourTypeBar from '../components/TourTypeBar'
import TourList from '../components/TourList'
import NavBar from '../components/NavBar'
import {fetchTourType,  fetchCountry, fetchTour, fetchHotelType, fetchCity, fetchHotel, fetchRoomType, fetchRoom} from '../http/tourAPI'
import {Context} from '../index'
import { observer } from 'mobx-react-lite'



const Tours = observer(() => {
    const {tour} = useContext(Context)
    const {types} = useContext(Context)
    const {countries} = useContext(Context)
    const {cities} = useContext(Context)
    const {hotelTypes} = useContext(Context)
    const {hotels} = useContext(Context)
    const {roomTypes} = useContext(Context)
    const {rooms} = useContext(Context)
    
    useEffect(() => {
  
        fetchTourType().then(data => types.setTourTypes(data))
        fetchCountry().then(data => countries.setCountries(data))
        fetchTour().then(data => tour.setTours(data))
        fetchHotelType().then(data => hotelTypes.setHotelTypes(data))
        fetchCity().then(data => cities.setCities(data))
        fetchHotel().then(data => hotels.setHotels(data))
        fetchRoomType().then(data => roomTypes.setRoomTypes(data))
        fetchRoom().then(data => rooms.setRooms(data))
    },[])

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
