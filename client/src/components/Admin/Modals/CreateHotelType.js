import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createHotelType } from '../../../http/tourAPI'


const CreateHotelType = ({show, onHide}) => {

    const [value, setValue] = useState()
      
    const addHotelType = () => {
      try {
        createHotelType({name:value}).then(data => setValue(''))
      } catch(e) {
        alert(e)
      }
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
          Creating Hotel type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form>
            <Form.Control  value={value}
            onChange = {e => setValue(e.target.value)}
            placeholder={"Enter hotel type name"}
            />
         </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addHotelType}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateHotelType
