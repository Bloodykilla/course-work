import {React, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import AdminImg from '../assets/img/admin.svg';
import Img from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';

import ControllTabs from '../components/Admin/ControllTabs'
import Footer from '../components/Footer';

const Admin = () => {

   


    return (
        <>
    <NavBar/>
    <div className="admin-section" style={{height:'100vh'}}>
    
        <Container className="d-flex flex-column">
                <div className="admin-panel m-5">
                    <div className="admin__hero d-flex justify-content-center align-items-center text-center pb-5">
                        <Img src={AdminImg}width={600}/>
                    
                    <div className="admin-text" style={{color:'#222222'}}>
                        <span className="admin-paragraph" style={{fontSize:'2.5rem', fontWeight:'bold'}}>
                                Welcome to <span style={{color:'#F25858'}}>Admin</span> panel!
                        </span>
                        <p className="p-3" style={{fontSize:'1.3rem'}}>
                                "...and even One person is able to change the whole world" 
                        </p>
                        </div>
                    </div>
                <div className="tabs d-flex flex-column">
                   <ControllTabs />
                   </div>
             </div>
        </Container>
        <Footer/>
    </div>
    </>
    )
}
export default Admin;