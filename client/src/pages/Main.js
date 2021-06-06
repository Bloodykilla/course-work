import React from 'react'
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Line from '../components/Line';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const Main = () => {
    return (
        <>  <NavBar />
            <Line />
            <Hero/>
            <SearchBar />
            <Footer/>
        </>
    )
}
export default Main;