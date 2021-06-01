import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FormLabel from 'react-bootstrap/esm/FormLabel'
import { Context } from '../../..' 
import {createTour, fetchTourType, fetchRoom} from '../../../http/tourAPI'


import { observer } from 'mobx-react-lite'




const CreateTour =  observer(({show, onHide}) => {

    const {types} = useContext(Context)
    const {rooms} = useContext(Context)


    useEffect(() => {
        fetchTourType().then(data => types.setTourTypes(data))
        fetchRoom().then(data => rooms.setRooms(data))
    },[])



    const [numb, setNumb] = useState(0)
    const [selectedDateTo, setSelectedDateTo] = useState()
    const [selectedDateBack, setSelectedDateBack] = useState()
    const [name, setName] = useState('')
    const [selectedCheckIn, setSelectedCheckIn] = useState()
    const [selectedCheckOut, setSelectedCheckOut] = useState()
    const [file, setFile] = useState(null)

    
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addTour = () => {
        
        const formData = new FormData ()
        formData.append('name', name)
        formData.append('price', `${numb}`)
        formData.append('date_to',JSON.stringify(selectedDateTo))
        formData.append('date_back',JSON.stringify(selectedDateBack))
        formData.append('room_id', rooms.selectedRoom.id)
        formData.append('tour_type_id', types.selectedType.id)
        formData.append('check_in', selectedCheckIn)
        formData.append('check_out', selectedCheckOut)
        formData.append('img',file)
        createTour(formData).then(data=>onHide())
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
          Creating Tour
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form className='pb-3'>
            <Form.Control  value={name}
            onChange = {e => setName(e.target.value)}
            placeholder={"Enter tour name"}
            />
         </Form>

         <Form className='pb-3'>
            <Form.Control  value={numb}
            type='number'
            onChange = {e => setNumb(Number(e.target.value))}
            placeholder={"Enter price"}
            />
         </Form>
         <div className='d-flex flex-column'>
        <FormLabel>Choose Check In time</FormLabel>
        <Form className='pl-3'>
            <Form.Control  
            type='time'
            value = {selectedCheckIn}
            onChange = {e => setSelectedCheckIn(e.target.value)}

            />
         </Form>

        <FormLabel>Choose Check Out time</FormLabel>
        <Form className='pl-3'>
            <Form.Control 
            value = {selectedCheckOut} 
            type='time'
            onChange = {e => setSelectedCheckOut(e.target.value)}

            />
         </Form>
        </div>   
         <div className="d-flex">
             <div>
        <Form.Label>Choose tour type</Form.Label>
         <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {types.selectedType.name || 'so what ?'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu>
                {types.tourTypes.map(type =>
                <Dropdown.Item 
                
                    onClick={() => types.setSelectedType(type)}
                    key={type.id}>

                        {type.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>        
        </Dropdown>
        </div>
        <div>
        <Form.Label>Choose your Room</Form.Label>
         <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {rooms.selectedRoom.number || 'City | Hotel | Type | Number'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu>
                {rooms.rooms.map(room =>
                <Dropdown.Item 
                
                    onClick={() => rooms.setSelectedRoom(room)}
                    key={room.id}>

                   {room.city}--{room.hotel}--{room.type}--{room.number}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>        
        </Dropdown>
        </div>
        <div className='ml-5'>
        
        </div>
        </div>

        <div className='d-flex flex-column'>
        <Form.Label>Choose Date to</Form.Label>
        
        <Datepicker selected={selectedDateTo}  
                    onChange={date => setSelectedDateTo(date)}
                    minDate={new Date()}
                    dateFormat='dd-MM-yyyy'
                    minDate={new Date()}
         />
        </div>
        <div className='d-flex flex-column'>
        <Form.Label>Choose Date Back</Form.Label>
        
        <Datepicker selected={selectedDateBack}  
                    onChange={date => setSelectedDateBack(date)}
                    dateFormat='dd-MM-yyyy'
                    minDate={selectedDateTo}
        />
        </div>
  
        <div className='pt-3'>
        <FormLabel>Choose image for uploading</FormLabel>
        <Form className='pb-3'>
            <Form.Control 
            type='file'
            onChange = {selectFile}
            placeholder={"Enter tour price"}
            />
         </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addTour}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})


export default CreateTour
