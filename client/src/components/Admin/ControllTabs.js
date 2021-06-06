import React, {useContext, useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Context } from '../..'
import { observer } from 'mobx-react-lite';
import RoomType from './RoomType'
import HotelType from './HotelType'
import Country from './Country'
import CreateTour from './Modals/CreateTour'
import CreateTourType from './Modals/CreateTourType'
import CreateCity from './Modals/CreateCity'

import CreateHotel from './Modals/CreateHotel'
import Room from './Room';

const ControllTabs = observer(() => {

 
 
//Get context of postgres tables


  const {tour} = useContext(Context)
  const {cities} = useContext(Context)
  const {hotels} = useContext(Context)
  const {types} = useContext(Context)


//Set component states


  const [cityVisible, setCityVisible] = useState(false)
  const [tourVisible, setTourVisible] = useState(false)
  const [hotelVisible, setHotelVisible] = useState(false)
  const [tourTypeVisible, setTourTypeVisible] = useState(false)


    //dynamic table input


  const renderCity = (city) => {
    return (
      <tr key = {city.id}>
        <td>{city.id}</td>
        <td>{city.name}</td>
        <td>{city.country_name}</td>
        <td className="d-flex justify-content-center align-items-center">
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger'>Delete</Button>
        </td>
      </tr>
    )
  }


  const renderHotel = (hotel) => {
    return (
      <tr key={hotel.id}>
          <td>{hotel.id}</td>
          <td>{hotel.hotel}</td>
          <td>{hotel.adress}</td>
          <td>{hotel.rang}</td>
          <td>{hotel.type}</td>
          <td>{hotel.city}</td>
          <td>{hotel.country}</td>
          <td className="d-flex justify-content-center align-items-center">
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger' >Delete</Button>
          </td>
      </tr>
    )
  }

  const renderTourType = (tour_type) => {
    return(
      <tr key={tour_type.id}>
          <td>{tour_type.id}</td>
          <td>{tour_type.name}</td>
          <td className="d-flex justify-content-center align-items-center">
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger'>Delete</Button>
          </td>
      </tr>
    )
  }

  const renderTour  = (tour) => {
      return  (
        <tr key={tour.id}>
            <td>{tour.id}</td>
            <td>{tour.tour}</td>
            <td>{tour.price}</td>
            <td>{tour.date_to}</td>
            <td>{tour.date_back}</td>
            <td>{tour.days}</td>
            <td>{tour.ttype}</td>
            <td>{tour.country}</td>
            <td>{tour.hotel}</td>
            <td>{tour.htype}</td>
            <td>{tour.hrang}</td>
            <td>{tour.rtype}</td>
            <td>{tour.room}</td>
            
            <td  className="d-flex justify-content-center">
              <Button style={{width:'100px'}} variant='primary'>Edit</Button>
              <Button  style={{width:'100px'}} variant='danger'>Delete</Button>
            </td>
        </tr>
        )
  }

 

  return (
    <Tabs
      defaultActiveKey="NavigationTabs" transition={false} id="noanim-tab-example" style={{height:'100%'}}> 
    
      <Tab eventKey="Tours" title="Tours" color="light">
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tour Name</th>
                  <th>Price</th>
                  <th>Date To</th>
                  <th>Date Back</th>
                  <th>Days</th>
                  <th>Tour Type</th>
                  <th>Country</th>
                  <th>Hotel Name</th>
                  <th>Hotel Type</th>
                  <th>Hotel Rang</th>
                  <th>Room Type</th>
                  <th>Room Id</th>
                  <th className="d-flex justify-content-center" style={{height:'5rem'}}><Button className="m-auto"  variant='outline-dark' onClick={() => setTourVisible(true)}>Add Tour</Button>
                  <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tour.tours.map(renderTour)}
              </tbody>
          </Table>
      </Tab>
      <Tab eventKey="Tour Types" title="Tour Types">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tour Type Name</th>
                  
                  <th className="d-flex justify-content-center"><Button className="m-auto" variant='outline-dark' onClick={() => setTourTypeVisible(true)}>Add Tour Type</Button></th>
                  <CreateTourType show={tourTypeVisible} onHide={() => setTourTypeVisible(false)}/>
                </tr>
              </thead>
              <tbody>
                {types.tourTypes.map(renderTourType)}
              </tbody>
          </Table>     
      </Tab>
      <Tab eventKey="Country" title="Countries">
        <Country/>
      </Tab>
      <Tab eventKey="City" title="Cities">
        
      <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>City Name</th>
                  <th>Country Name</th>
                  <th className="d-flex justify-content-center"><Button className="m-auto" variant='outline-dark' onClick={() => setCityVisible(true)}>Add Сity</Button></th>
                  <CreateCity show={cityVisible} onHide={() => setCityVisible(false)}/>
                </tr>
              </thead>
              <tbody>
                {cities.cities.map(renderCity)}
              </tbody>
          </Table>              
      </Tab>
      <Tab eventKey="Hotel Types" title="Hotel Types">
        <HotelType/>                  
      </Tab>
      <Tab eventKey="Hotels" title="Hotels" color="light">
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hotel Name</th>
                  <th>Adress</th>
                  <th>Rang</th>
                  <th>Hotel Type</th>
                  <th>City</th>
                  <th>Country</th>

                  <th className="d-flex justify-content-center" style={{height:'5rem'}}><Button className="m-auto"  variant='outline-dark' onClick={() => setHotelVisible(true)}>Add Hotel</Button>
                  <CreateHotel show={hotelVisible} onHide={() => setHotelVisible(false)}/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {hotels.hotels.map(renderHotel)}
              </tbody>
          </Table>
      </Tab>
      <Tab eventKey="RoomTypes" title="Room Types">
        <RoomType />
        </Tab>

        <Tab eventKey="Rooms" title="Rooms">
          <Room />
        </Tab>
      </Tabs>  
   
  );
})
export default ControllTabs
