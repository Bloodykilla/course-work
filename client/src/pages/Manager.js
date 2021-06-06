import {React, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import ManagerImg from '../assets/img/manager.svg';
import Img from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';

const Manager = () => {

   


    return (
        <>
    <NavBar/>
    <div className="admin-section" style={{height:'100vh'}}>
    
        <Container className="d-flex flex-column">
                <div className="manager-panel m-5">
                    <div className="manager__hero d-flex justify-content-center align-items-center text-center pb-5">
                        <Img src={ManagerImg}width={600}/>
                    
                    <div className="manager-text" style={{color:'#222222'}}>
                        <span className="manager-paragraph" style={{fontSize:'2.5rem', fontWeight:'bold'}}>
                                Welcome to <span style={{color:'#F25858'}}>Manager</span> panel!
                        </span>
                        <p className="p-3" style={{fontSize:'1.3rem'}}>
                                "...Greed Is Good " 
                        </p>
                        </div>
                    </div>
                <div className="tabs d-flex flex-column">

                   </div>
             </div>
        </Container>
    </div>
    </>
    )
}
export default Manager;
