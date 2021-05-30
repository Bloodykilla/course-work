import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

import { Context } from '../../..'
import {createHotel, fetchCity,fetchHotelType} from '../../../http/tourAPI'
import {fetchCountry} from '../../../http/tourAPI'

import { observer } from 'mobx-react-lite'
import FormLabel from 'react-bootstrap/esm/FormLabel'
import CountryBar from '../../CountryBar'
import HotelTypeBar from '../../HotelTypeBar'


const CreateHotel =  observer(({show, onHide}) => {

    const {hotelTypes} = useContext(Context)
    const {countries} = useContext(Context)
    const {cities} = useContext(Context)


    useEffect(() => {
        fetchCountry().then(data => countries.setCountries(data))
        fetchHotelType().then(data => hotelTypes.setHotelTypes(data))
        fetchCity().then(data => cities.setCities(data))
    },[])



    const [name, setName] = useState()
    const [adress, setAdress] = useState()
    const [rang, setRang] = useState()
    const [file, setFile] = useState(null)

    
    const selectedFile = e => {
     setFile(e.target.files[0])
    }

    const addHotel = () => {
        
        const formData = new FormData ()
        formData.append('name', name)
        formData.append('adress', adress)
        formData.append('city_id', cities.selectedCities.id)
        formData.append('rang', rang)
        formData.append('img', file.selectedFile.name)
        createHotel(formData).then(data => onHide())
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
          Creating Hotel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form className='pb-3'>
            <Form.Control  value={name}
            onChange = {e => setName(e.target.value)}
            placeholder={"Enter tour name"}
            />
         </Form>
         <Form.Label>Input adress</Form.Label>
         <Form className='pb-3'>
            <Form.Control  value={adress}
            onChange = {e => setAdress(e.target.value)}
            placeholder={"Enter adress "}
            />
         </Form>
        <div>
        <FormLabel>Input Hotel Rang</FormLabel>
        <Form className='pl-3'>
            <Form.Control  
            type='number'
            value = {rang}
            onChange = {e => setRang(e.target.value)}

            />

         </Form>

       
        </div>   
         <div className="d-flex">
             <div>
        <Form.Label>Choose hotel type</Form.Label>
                  <HotelTypeBar />
        </div>

                  <div className = 'pl-5'>
        <Form.Label>Choose city</Form.Label>
         <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {cities.selectedCities.name || 'city'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu  style={{height:'300px',overflowY:'scroll'}}>
                {cities.cities.map(city =>
                <Dropdown.Item 
                
                    onClick={() => cities.setSelectedCities(city)}
                    key={city.country_id}>

                     {city.country_name}, {city.name}
                </Dropdown.Item>
               )}
            </Dropdown.Menu>        
        </Dropdown>
        </div>
        </div>

    
  
        <div className='pt-3'>
        <FormLabel>Choose image for uploading</FormLabel>
        <Form className='pb-3'>
            <Form.Control 
            type='file'
            onChange = {selectedFile}
         
            />
         </Form>
        </div> 
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addHotel}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})


export default CreateHotel
