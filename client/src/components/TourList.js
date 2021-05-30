import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Row from 'react-bootstrap/esm/Row'
import { Context } from '..'
import TourItem from './TourItem'

const TourList = observer(() => {

    const {tour} = useContext(Context)

    return (
        <Row className="d-flex">
            {tour.tours.map(tour =>
            <TourItem key={tour.id} tour={tour}>

            </TourItem>
            )}
        </Row>
    )
})

export default TourList
