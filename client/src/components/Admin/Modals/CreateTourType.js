import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createTourType } from '../../../http/tourAPI'


const CreateTourType = ({show, onHide}) => {

    const [value, setValue] = useState()
      
    const addTourType = () => {
      try {
        createTourType({name:value}).then(data => setValue(''))
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
          Creating Tour Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form>
            <Form.Control  value={value}
            onChange = {e => setValue(e.target.value)}
            placeholder={"Enter tour type name"}
            />
         </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addTourType}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateTourType
