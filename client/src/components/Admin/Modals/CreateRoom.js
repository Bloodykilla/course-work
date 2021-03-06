import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

import { Context } from '../../..' 
import {createRoom, fetchCountry, fetchRoomType} from '../../../http/tourAPI'
import {fetchHotel} from '../../../http/tourAPI'

import { observer } from 'mobx-react-lite'




const CreateRoom =  observer(({show, onHide}) => {

    const {roomTypes} = useContext(Context)
    const {hotels} = useContext(Context)
    const {countries} = useContext(Context)
    useEffect(() => {
        fetchRoomType().then(data => roomTypes.setRoomTypes(data))
        fetchHotel().then(data => hotels.setHotels(data))
        fetchCountry().then(data => countries.setCountries(data))

    },[])


    const [numb, setNumb] = useState(0)

    const addRoom = () => {
        
        const formData = new FormData ()
        formData.append('number', `${numb}`)
        formData.append('room_type_id', roomTypes.selectedRoomType.id)
        formData.append('hotel_id', hotels.selectedHotel.id)
        createRoom(formData).then(data => onHide())
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Creating Room
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

         <Form className='pb-3'>
            <Form.Control  value={numb}
            type='number'
            onChange = {e => setNumb(Number(e.target.value))}
            placeholder={"Enter number"}
            />
         </Form>
 
         <div className="d-flex">
        
             <div>
        <Form.Label>Choose room type</Form.Label>
         <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {roomTypes.selectedRoomType.name || 'room type'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu>
                {roomTypes.roomTypes.map(roomType =>
                <Dropdown.Item 
                
                    onClick={() => roomTypes.setSelectedRoomType(roomType)}
                    key={roomType.id}>

                        {roomType.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>        
        </Dropdown>
        </div>

        <div className='pl-5'>
        <Form.Label>Choose hotel</Form.Label>
         <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {hotels.selectedHotel.hotel || 'hotel name'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu style={{height:'300px',overflowY:'scroll'}}>
                {hotels.hotels.map(hotel =>
                <Dropdown.Item 
                
                    onClick={() => hotels.setSelectedHotel(hotel)}
                    key={hotel.id}>

                       {hotel.city}, {hotel.hotel}
                </Dropdown.Item>
               )}
            </Dropdown.Menu>        
        </Dropdown>
        </div>

        </div>
 
 
  
   
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addRoom}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})


export default CreateRoom
