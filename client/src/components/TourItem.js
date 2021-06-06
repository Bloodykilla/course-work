
import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'

import {useHistory} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { TOURS_ROUTE } from '../utils/const'


const TourItem = ({tour})=> {
    const history = useHistory()

    const parseDate = new Date(tour.date_to);

    const parseDayOfMonth = parseDate.getDate();
    const parseMonth = parseDate.getMonth(); 
    const parseYear = parseDate.getFullYear();

    const dateStringTo = parseDayOfMonth + "-" + (parseMonth + 1) + "-" + parseYear;

    const currentDate = new Date(tour.date_back);

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();

    const dateStringBack = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
 

    return (
        <Col md={12} className="p-5" style={{backgroundColor:'#fff'}}>
                <div className="d-flex flex-direction-row align-items-center">
                    <Col md={4}>
                        <Image src={process.env.REACT_APP_API_URL + tour.timg} style={{width:'100%'}}/>
                    </Col>
                    <Col md={8}>
                    <div className="info" style={{width:'100%'}}>
                        <div className ='info-header d-flex justify-content-between'>
                                <div className='header-name'>
                                    <div className = "pb-1" style={{fontSize:'2rem',fontWeight:'bold'}}>{tour.tour}</div>
                                    <div>{tour.country}, {tour.city}</div>
                                </div>
                                <div className="tour-raiting d-flex flex-column align-items-center pr-1">
                                    <div>Rate: </div>
                                    <div className='d-flex justify-content-center  align-items-center' style={{width:'3rem',height:'3rem', borderRadius:'50%',border:'2px solid #222222'}}>
                                        <span style={{fontSize:'1.5rem'}}>
                                            {tour.tour_rate}
                                        </span>
                                    </div>
                                    <div className="pt-4"><span style={{textAlign:'center',fontSize:'2rem',fontWeight:'bold'}}>{tour.price} ₴</span></div>
                                </div>
                        
                        </div>

                        <div className="info-body d-flex justify-content-between pt-3 pr-1">
                                <div className="body-left">
                                    <div className="d-flex align-items-center"style={{textTransform:'Uppercase', fontWeight:'bold'}}>{tour.hotel}, {tour.hrang}<i class="fas fa-star"></i></div>
                                    <div>days: {tour.days}</div>
                                    <div>Date to: {dateStringTo}</div>
                                </div>
                                <div className="body-middle">
                                    <div>{tour.htype}</div>
                                    <div>{tour.ttype}</div>
                                    <div>Date back: {dateStringBack}</div>
                                </div> 
                                <div className="body-right d-flex flex-column justify-content-center">
                   
                                    
                                    <div>
                                    <Button style={{height:'50px'}}  onClick={() => history.push(TOURS_ROUTE + '/' + tour.id)}>
                                        Read More
                                    </Button>
                                    </div>
                            
                            </div>
                        </div>
                       
                    </div>
                    </Col>
                </div>
        </Col>
    )
}

export default TourItem
