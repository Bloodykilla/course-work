import React,{useState, useContext} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {createCity} from '../../../http/tourAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../../..'
import Dropdown from 'react-bootstrap/Dropdown'


const CreateCity = observer(({show, onHide}) => {

  const {countries} = useContext(Context)
  const [name, setName] = useState()

  const addCity = () => {

    const formData = new FormData()
    formData.append('name', name)
    formData.append('country_id',countries.selectedCountry.id)
    createCity(formData).then(data => onHide())

}

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="md"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Creating City
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form>
         <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {countries.selectedCountry.name || 'Choose country'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu>
                {countries.countries.map(country =>
                <Dropdown.Item 
                
                    onClick={() => countries.setSelectedCountry(country)}
                    key={country.id}>

                        {country.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>        
        </Dropdown>
        <Form.Label>Input city name</Form.Label>
        <Form className='pb-3'>
            <Form.Control value = {name}
            onChange = {e => setName(e.target.value)}
            placeholder={"Enter here ... "}
            />
         </Form>
         </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addCity}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreateCity
