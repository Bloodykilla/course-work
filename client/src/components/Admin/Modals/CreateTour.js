import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

import { Context } from '../../..'
import {fetchTourType} from '../../../http/tourAPI'
import {fetchCountry} from '../../../http/tourAPI'
//import {fetchCity} from '../../../../http/tourAPI'
import { observer } from 'mobx-react-lite'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FormLabel from 'react-bootstrap/esm/FormLabel'
import CountryBar from '../../CountryBar'


const CreateTour =  observer(({show, onHide}) => {

    const {types} = useContext(Context)
    const {countries} = useContext(Context)
    const {cities} = useContext(Context)

    useEffect(() => {
        fetchTourType().then(data => types.setTourTypes(data))
        fetchCountry().then(data => countries.setCountries(data))
        //fetchCity().then(data => cities.setCities(data))
    },[])

    //POST query states
    
    const [selectedDateTo, setSelectedDateTo] = useState()
    const [selectedDateBack, setSelectedDateBack] = useState()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState()

    const addTour = () => {
        
        //const formData = new FormData ()


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
            <Form.Control  value={price}
            type='number'
            onChange = {e => setPrice(e.target.value)}
            placeholder={"Enter price "}
            />
         </Form>
        <div className='d-flex flex-column'>
        <FormLabel>Choose Check In time</FormLabel>
        <Form className='pl-3'>
            <Form.Control  
            type='time'
            onChange = {e => setPrice(e.target.value)}

            />
         </Form>

        <FormLabel>Choose Check Out time</FormLabel>
        <Form className='pl-3'>
            <Form.Control  
            type='time'
            onChange = {e => setPrice(e.target.value)}

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
        <div className='ml-5'>
            <CountryBar/>
        </div>
        </div>

        <div className='d-flex flex-column'>
        <Form.Label>Choose Date to</Form.Label>
        
        <Datepicker selected={selectedDateTo}  
                    onChange={date => setSelectedDateTo(date)}
                    dateFormat='dd-MM-yyyy'
                    minDate = {new Date()}
        />
        </div>
        <div className='d-flex flex-column'>
        <Form.Label>Choose Date Back</Form.Label>
        
        <Datepicker selected={selectedDateBack}  
                    onChange={date => setSelectedDateBack(date)}
                    dateFormat='dd-MM-yyyy'
                    minDate = {new Date()}
        />
        </div>
  
        <div className='pt-3'>
        <FormLabel>Choose image for uploading</FormLabel>
        <Form className='pb-3'>
            <Form.Control  value={file}
            type='file'
            onChange = {e => setFile(e.target.value)}
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
