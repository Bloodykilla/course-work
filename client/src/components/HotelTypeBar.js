import { observer } from 'mobx-react-lite'
import React, { useContext} from 'react'
import { Context } from '..'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/esm/Dropdown'



const HotelTypeBar = observer(() => {
   
    const {hotelTypes} = useContext(Context)


    return (
        <div className="hotelType-filter">     
            <Form.Group controlId="controlId">

                <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
               {hotelTypes.selectedHotelType || 'hotel type'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu>
                {hotelTypes.hotelTypes.map(hotelType =>
                <Dropdown.Item 
                
                    onClick={() => hotelTypes.setSelectedHotelType(hotelType)}
                    key={hotelType.id}>

                        {hotelType.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>        
        </Dropdown>
               
            </Form.Group>
                               
        </div>
    )
  }
)
export default HotelTypeBar
