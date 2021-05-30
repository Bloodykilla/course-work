import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tourStore from './store/tourStore';
import userStore from './store/userStore';
import countryStore from './store/countryStore';
import tourTypeStore from './store/tourTypeStore';
import hotelStore from './store/hotelStore';
import cityStore from './store/cityStore';
import hotelTypeStore from './store/hotelTypeStore';
import roomTypeStore from './store/roomTypeStore';
import roomStore from './store/roomStore';


export const Context = createContext(null)
ReactDOM.render(
  <Context.Provider value = {{
    user: new userStore(),
    tour: new tourStore(),
    countries: new countryStore(),
    types: new tourTypeStore(),
    hotels:new hotelStore(),
    cities: new cityStore(),
    hotelTypes: new hotelTypeStore(),
    roomTypes: new roomTypeStore(),
    rooms: new roomStore()
  }}>

    <App />
  </Context.Provider>,
  document.getElementById('root')
);

