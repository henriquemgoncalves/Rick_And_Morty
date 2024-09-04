import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import Cards from '../components/Cards';

const Home = () => {
  const [persons, setPersons] = useState([]);
  
  const getPersons = async() => {
    try {
      const res = await axios.get('https://rickandmortyapi.com/api/character');
      const data = res.data;
      
      setPersons(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPersons();
  }, [])

  return (
    <div className='container'>
      <h1>Welcome</h1>
      <p>Meet the main Characters of Rick and Morty.</p>
      <div className="cards">
        {persons.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          persons.results.map((person) => (
              <Cards key={person.id} person={person}/>  
          ))
        )}
      </div>
    </div>
  );
};

export default Home;