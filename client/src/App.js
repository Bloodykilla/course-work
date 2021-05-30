import React,{useContext, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

import './styles/global.scss';

const App = () => {



    return (
      <BrowserRouter> 
     
        <AppRouter />
 
      </BrowserRouter>
    );
};
export default App;
