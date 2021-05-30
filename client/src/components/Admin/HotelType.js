import React, {useContext, useState} from 'react'


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateHotelType from './Modals/CreateHotelType';
import { Context } from '../..'

const HotelType = () => {

    const {hotelTypes} = useContext(Context)
    const [hotelTypeVisible, setHotelTypeVisible] = useState(false)
    const [hotelType, setHotelType] = useState([])

    //Delete methods
  const deleteHotelType = async(id) => {
    try {
      const deleteHotelType = await fetch(`http://localhost:5000/api/hotel-type/${id}`,{
      method:'DELETE'});

      setHotelType(hotelType.filter(hotel_type => hotel_type.id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  

    const renderHotelType = (hotel_type) => {
        return(
          <tr key={hotel_type.id}>
              <td>{hotel_type.id}</td>
              <td>{hotel_type.name}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
                <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger' onClick={() =>deleteHotelType(hotel_type.id)}>Delete</Button>
              </td>
          </tr>
        )
      }

    return (
     
        <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Hotel Types</th>
                    
                    <th className="d-flex justify-content-center"><Button className="m-auto" variant='outline-dark' onClick={() => setHotelTypeVisible(true)}>Add Hotel type</Button></th>
                    <CreateHotelType show={hotelTypeVisible} onHide={() => setHotelTypeVisible(false)}/>
                  </tr>
                </thead>
                <tbody>
                      {hotelTypes.hotelTypes.map(renderHotelType)}
                </tbody>
            </Table>                     

    )
}

export default HotelType
