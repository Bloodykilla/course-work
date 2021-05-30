import React from 'react'
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Line from '../components/Line';
import NavBar from '../components/NavBar';
const Main = () => {
    return (
        <>  <NavBar />
            <Line />
            <Hero/>
            <SearchBar />
        </>
    )
}
export default Main;