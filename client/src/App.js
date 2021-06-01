import React,{useContext, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {fetchTourType,  fetchCountry, fetchTour, fetchHotelType, fetchCity, fetchHotel, fetchRoomType, fetchRoom} from './http/tourAPI'

import {Context} from './index'

import './styles/global.scss';

const App = () => {

  const {tour} = useContext(Context)
    const {types} = useContext(Context)
    const {countries} = useContext(Context)
    const {cities} = useContext(Context)
    const {hotelTypes} = useContext(Context)
    const {hotels} = useContext(Context)
    const {roomTypes} = useContext(Context)
    const {rooms} = useContext(Context)
    
    useEffect(() => {
  
        fetchTourType().then(data => types.setTourTypes(data))
        fetchCountry().then(data => countries.setCountries(data))
        fetchTour().then(data =>  tour.setTours(data))
       
         

        fetchHotelType().then(data => hotelTypes.setHotelTypes(data))
        fetchCity().then(data => cities.setCities(data))
        fetchHotel().then(data => hotels.setHotels(data))
        fetchRoomType().then(data => roomTypes.setRoomTypes(data))
        fetchRoom().then(data => rooms.setRooms(data))
    },[])


    return (
      <BrowserRouter> 
     
        <AppRouter />
 
      </BrowserRouter>
    );
};
export default App;
