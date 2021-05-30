import React, {useContext, useState} from 'react'


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateRoom from './Modals/CreateRoom';
import { Context } from '../..'
import { observer } from 'mobx-react-lite';

const Room = observer(() => {

    const {roomTypes} = useContext(Context)
    const {rooms} = useContext(Context)
    const [roomVisible, setRoomVisible] = useState(false)
    const [room, setRoom] = useState([])

    //Delete methods
  const deleteRoom = async(id) => {
    try {
      const deleteRoom = await fetch(`http://localhost:5000/api/room/${id}`,{
      method:'DELETE'});

      setRoom(room.filter(room => room.id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  

    const renderRoom = (room) => {
        return(
          <tr key={room.id}>
              <td>{room.number}</td>
              <td>{room.rtype}</td>
              <td>{room.hotel}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
                <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger' onClick={() =>deleteRoom(room.id)}>Delete</Button>
              </td>
          </tr>
        )
      }

    return (
     
        <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Number</th>
                    <th>Room Type</th>
                    <th>Hotel</th>
                    
                    <th className="d-flex justify-content-center"><Button className="m-auto" variant='outline-dark' onClick={() => setRoomVisible(true)}>Add Room</Button></th>
                    <CreateRoom show={roomVisible} onHide={() => setRoomVisible(false)}/>
                  </tr>
                </thead>
                <tbody>
                      {rooms.rooms.map(renderRoom)}
                </tbody>
            </Table>                     

    )
})

export default Room
