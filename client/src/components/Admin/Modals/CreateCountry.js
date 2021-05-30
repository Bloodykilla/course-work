import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createCountry } from '../../../http/tourAPI'
const CreateCountry = ({show, onHide}) => {

    const [value, setValue] = useState()
      
    const addCountry = () => {
      try {
        createCountry({name:value}).then(data => setValue(''))
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
          Creating Country
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form>
            <Form.Control  value={value}
            onChange = {e => setValue(e.target.value)}
            placeholder={"Enter country name"}
            />
         </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addCountry}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateCountry
