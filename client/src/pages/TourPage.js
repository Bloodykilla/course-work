import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'

import { useParams } from 'react-router'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { fetchOneTour } from '../http/tourAPI'

const TourPage = observer(() => {
   const [tour, setTour] = useState({})
   const {id} = useParams()
   useEffect(() => {
        fetchOneTour(id).then(data => setTour(data))
   })
   //DateParse
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
        <>
        <NavBar />
        <div className="tour-page pt-3">
        <Container mt={3}>
            <div style={{backgroundColor:'#fff', borderRadius:'1rem', boxShadow:'5px 4px 39px 0px rgba(101, 94, 89, 0.13)'}}>
            <Col md={12}>
                <div className="tour-page--header pb-0 pl-3 pr-3 pt-3">
                    <div className="d-flex  justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <h5 style={{color:'#222222', fontWeight:'200'}}></h5>
                            <h1 className="font-weight-bold">{tour.tour}</h1>
                            <div className="d-flex">
                            <h5 style={{color:'#222222', fontWeight:'400'}}>Tour Id: {tour.id}</h5> 
                            <h5 className="pl-3"style={{color:'#F25858'}}></h5>
                        </div>
                    </div>
                <div className="d-flex align-items-center p-2">
                    
                   
                      <span className="pr-3" style={{fontSize:'1.5rem', fontWeight:'500'}}>RATE</span>
                      <div className="tour-raiting d-flex flex-direction-column align-items-center pr-3">
                                    <div className='d-flex justify-content-center align-items-center' style={{border:'2px solid #f25658',width:'4rem',height:'4rem', borderRadius:'50%'}}>
                                        <span style={{fontSize:'2rem', color:'#f25658'}}>
                                            {tour.tour_rate}
                                        </span>
                                    </div>
                                </div>                 
                </div>
            </div>                    
        </div>
                
                <div className="tour-page d-flex pt-3 pb-5 justify-content-between">
                    <div className="img-slider d-flex justify-content-center">
                       
                        <Image src={process.env.REACT_APP_API_URL + tour.timg} width={750}/>
                    </div>
              
                    <div className="tour-page--info ml-5" style={{width:'100%',borderTop:'1px solid rgb(0,0,0,0.2)',borderBottom:'1px solid rgb(0,0,0,0.2)',}}>
                        <div className="tour-page__info--title p-3">
                             <h3 style={{fontWeight:"bold", margin:'0',fontSize:'1.3rem',textTransform:"uppercase",textAlign:'center'}}>Tour Info</h3>
                        </div>
                        <div className="tour-page__info--text" style={{width:'100%'}}>
                             <div className="titles d-flex flex-column" style={{fontWeight:'600', letterSpacing:'1px'}}>
                                 <div className="titles date-to">
                                     <span>Date to:</span>
                                     <span>{dateStringTo}</span>
                                 </div>
                                 <div className="titles date-back">
                                     <span>Date back:</span> 
                                     <span>{dateStringBack}</span>
                                 </div>
                                
                                 <div className="titles tour-type">
                                     <span>Tour type:</span>
                                     <span>{tour.ttype}</span>
                                 </div>
                                 <div className="titles country">
                                      <span>Country:</span>
                                      <span>{tour.country}</span>
                                 </div>
                                <div className="titles city">
                                     <span>City:</span>
                                     <span>{tour.city}</span>
                                </div>
                                <div className="titles hotel">
                                    <span>Hotel:</span>
                                    <span style={{textTransform:'uppercase'}}>{tour.hotel},{tour.hrang} <i class="fas fa-star"></i></span>
                                </div>
                                 
                             </div>
                        </div>
                    
                        <div className="submit-area d-flex flex-column justify-content-center">
                            <span>{tour.price}₴</span>
                            <button className="btn">
                                <span>buy now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-5 d-flex justify-content-center" style={{width:'100%'}}>
                    <div>
                        <span style={{fontSize:'2rem', fontWeight:'bold', textTransform:'uppercase', textAlign:'center'}}>the tour includes</span>
                    </div>
                    
                </div>
                
                <div className="tour-include d-flex justify-content-around pt-4">
                    <div className="air d-flex flex-column align-items-center">
                        <div>
                            <i class="fas fa-plane"/>
                        </div>
                            <span>flight</span>
                        
                    </div>
                
                    <div className="bus d-flex flex-column align-items-center">
                        <div>
                        <i class="fas fa-bus"></i>
                        </div>
                            <span>group transfer</span>
                        
                    </div>
              
                    <div className="hotel d-flex flex-column align-items-center">
                        <div>
                        <i class="fas fa-hotel"></i>
                        </div>
                            <span>hotel accommodation</span>
                        
                    </div>
                 
                    <div className="food d-flex flex-column align-items-center">
                        <div>
                        <i class="fas fa-utensils"></i>
                        </div>
                            <span>food</span>
                        
                    </div>
             
                    <div className="medical d-flex flex-column align-items-center">
                        <div>
                        <i class="fas fa-briefcase-medical"></i>
                        </div>
                            <span>medical insurance</span>
                        
                    </div>
                    
                </div>
                <div className="tour-page d-flex pt-5 pb-5 justify-content-between">
                    
              
                    <div className="tour-page--info mr-5 ml-5" style={{width:'100%',borderTop:'1px solid rgb(0,0,0,0.2)',borderBottom:'1px solid rgb(0,0,0,0.2)',}}>
                        <div className="tour-page__info--title p-3">
                             <h3 style={{fontWeight:"bold", margin:'0',fontSize:'1.3rem',textTransform:"uppercase",textAlign:'center'}}>Hotel Info</h3>
                        </div>
                        <div className="tour-page__info--text" style={{width:'100%'}}>
                             <div className="d-flex flex-column justify-content-around" style={{fontWeight:'600', letterSpacing:'1px'}}>
                                 <div className="d-flex justify-content-between">
                                     <span>Hotel adress:</span>
                                     <span>{tour.adress}</span>
                                 </div>
                                 <div className="d-flex justify-content-between pt-3">
                                     <span>Hotel type:</span>
                                     <span>{tour.htype}</span>
                                 </div>
                                
                                 <div className="d-flex justify-content-between pt-3">
                                     <span>Hotel rang:</span>
                                     <span>{tour.hrang} <i class="fas fa-star"></i></span>
                                 </div>
                                 <div className="d-flex justify-content-between pt-3">
                                     <span>Room type:</span>
                                     <span>{tour.rtype}</span>
                                 </div>
                                 <div className="d-flex justify-content-between pt-3">
                                     <span>Room number:</span>
                                     <span>{tour.room}</span>
                                 </div>
                               
                                 
                             </div>
                        </div>
                    
                      
                    </div>
                    <div className="img-slider d-flex justify-content-center">
                       
                        <Image src={process.env.REACT_APP_API_URL + tour.himg} width={750}/>
                    </div>
                </div>
 
 
            </Col>

            <Col md={3}>

            </Col>
            </div>
        </Container>
        </div>
        <Footer/>
        </>
    )
})

export default TourPage
