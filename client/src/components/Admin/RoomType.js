import React, {useContext, useState} from 'react'


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateRoomType from './Modals/CreateRoomType';
import { Context } from '../..'
import { observer } from 'mobx-react-lite';

const RoomType = observer(() => {

    const {roomTypes} = useContext(Context)
    const [roomTypeVisible, setRoomTypeVisible] = useState(false)
    const [roomType, setRoomType] = useState([])

    //Delete methods
  const deleteRoomType = async(id) => {
    try {
      const deleteRoomType = await fetch(`http://localhost:5000/api/room-type/${id}`,{
      method:'DELETE'});

      setRoomType(roomType.filter(room_type => room_type.id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  

    const renderRoomType = (room_type) => {
        return(
          <tr key={room_type.id}>
              <td>{room_type.id}</td>
              <td>{room_type.name}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
                <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger' onClick={() =>deleteRoomType(room_type.id)}>Delete</Button>
              </td>
          </tr>
        )
      }

    return (
     
        <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Room Types</th>
                    
                    <th className="d-flex justify-content-center"><Button className="m-auto" variant='outline-dark' onClick={() => setRoomTypeVisible(true)}>Add Room type</Button></th>
                    <CreateRoomType show={roomTypeVisible} onHide={() => setRoomTypeVisible(false)}/>
                  </tr>
                </thead>
                <tbody>
                      {roomTypes.roomTypes.map(renderRoomType)}
                </tbody>
            </Table>                     

    )
})

export default RoomType
