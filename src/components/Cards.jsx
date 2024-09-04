import React, { useEffect, useState } from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';

const Cards = ({person}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if(modal) {
        document.body.classList.add('active-modal');
      } else {
        document.body.classList.remove('active-modal');
      }

      return () => {
        document.body.classList.remove('active-modal');
      };

  }, [modal]);

  return (
    <>
      <div className="person" onClick={toggleModal}> 
          <img src={person.image} alt={person.name}/>
            <Link className="info">
              <h2>{person.name}</h2>       
            </Link>           
        </div>

        {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>{person.name}</h2>
            <p>Gênero: {person.gender}</p>
            <p>Espécie: {person.species}</p>
            <p>Planeta: {person.origin.name}</p>
            <p>Status: {person.status}</p>
            <h3 className="close-modal" onClick={toggleModal}>
              X
            </h3>
          </div>
        </div>
      )} 
    </>       
  )
}

export default Cards;