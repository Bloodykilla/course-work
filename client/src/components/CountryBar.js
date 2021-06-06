import { observer } from 'mobx-react-lite'
import React, { useContext} from 'react'
import { Context } from '..'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/esm/Dropdown'



const CountryBar = observer(() => {
   
    const {countries} = useContext(Context)


    return (
        <div className="country-filter">     
            <Form.Group controlId="controlId">
                <Form.Label>Choose country</Form.Label>
                <Dropdown className='pb-3'>
            
            <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{width:'210px'}}>
               {countries.selectedCountry.name || 'Destination'}
            </Dropdown.Toggle>
           
            <Dropdown.Menu style={{width:'210px'}}>
                {countries.countries.map(country =>
                <Dropdown.Item 
                
                    onClick={() => countries.setSelectedCountry(country)}
                    key={country.id}>

                        {country.name}
                </Dropdown.Item>
                )}
            </Dropdown.Menu>        
        </Dropdown>
               
            </Form.Group>
                               
        </div>
    )
  }
)
export default CountryBar
