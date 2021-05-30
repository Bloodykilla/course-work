import { observer } from 'mobx-react-lite'
import React, { useContext} from 'react'
import { Context } from '..'
import ListGroup from 'react-bootstrap/ListGroup'



const TourTypeBar = observer(() => {
   
    const {types} = useContext(Context)


    return (
        <div className="type-filter">         
         <label>Choose tour type</label>
                <ListGroup>
                        {types.tourTypes.map(type =>
                        <ListGroup.Item 
                        active={type.id === types.selectedType.id}
                        style={{cursor:'pointer'}}
                        onClick={() => types.setSelectedType(type)}
                        key={type.id} >
                            {type.name}
                        </ListGroup.Item>
                       )}   
            </ListGroup>
                               
        </div>
    )
  }
)
export default TourTypeBar
