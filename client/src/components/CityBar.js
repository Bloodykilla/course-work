import { observer } from 'mobx-react-lite'
import React, { useContext} from 'react'
import { Context } from '..'
import ListGroup from 'react-bootstrap/ListGroup'



const CityBar = observer(() => {
   
    const {cities} = useContext(Context)


    return (
        <div className="type-filter">         
         <label>Choose city</label>
                <ListGroup>
                        {cities.cities.map(city =>
                        <ListGroup.Item 
                        active={city.id === cities.selectedCities.id}
                        style={{cursor:'pointer'}}
                        onClick={() => cities.setSelectedCities(city)}
                        key={city.id} >
                            {city.name}
                        </ListGroup.Item>
                       )}   
            </ListGroup>
                               
        </div>
    )
  }
)
export default CityBar
