import React, {useContext, useState} from 'react'


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateCountry from './Modals/CreateCountry';
import { Context } from '../..'

const Country = () => {

    const {countries} = useContext(Context)
    const [countryVisible, setCountryVisible] = useState(false)
    const [country, setCountry] = useState([])

    //Delete methods
  const deleteCountry = async(id) => {
    try {
      const deleteCountry = await fetch(`http://localhost:5000/api/country/${id}`,{
      method:'DELETE'});

      setCountry(country.filter(country => country.id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  
  const renderCountry  = (country) => {
    return(
      <tr key={country.id}>
          <td>{country.id}</td>
          <td>{country.name}</td>
          <td className="d-flex justify-content-center align-items-center">
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='primary'>Edit</Button>
            <Button className='ml-5 mr-5' style={{width:'100px'}} variant='danger' onClick={() => deleteCountry(country.id)}>Delete</Button>
          </td>
      </tr>
    )
  }


    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            
            <th className="d-flex justify-content-center"><Button className="m-auto" variant='outline-dark' onClick={() => setCountryVisible(true)}>Add Сountry</Button></th>
            <CreateCountry show={countryVisible} onHide={() => setCountryVisible(false)}/>
          </tr>
        </thead>
        <tbody>
          {countries.countries.map(renderCountry)}
        </tbody>
    </Table> 
    )
}

export default Country
