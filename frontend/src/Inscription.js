import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import './Inscription.css'

function Inscription() {

    const [formData, setFormData] = useState({
        pseudo: '',
        mail: '',
        mail2: '',
        mdp: '',
        mdp2: '',
      });
  
  const [response, setResponse] = useState(null);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://mairie-beauvais.local/api/inscription.php", {
      method: 'POST',
      body: JSON.stringify({
        data: formData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setResponse(data);
        if (data === 'Bravo vous êtes inscrit') {
          setResponse(<p class="valid">Votre compte a bien été crée ! </p>);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
      <>

        <section className="inscription_form">

          <div className='boite-2'>
              <h2>Inscrivez-vous</h2>

              <form onSubmit={handleSubmit}>
                  <br/><br/>
                  <input type="text" placeholder="Nom" id="pseudo" name="pseudo" onChange={handleChange}/>
                  <br/><br/>
                  <input type="email" placeholder="E-mail" id="mail" name="mail"  onChange={handleChange}/>
                  <br/><br/>
                  <input type="password" placeholder="Mot de passe" id="mdp" name="mdp"  onChange={handleChange}/>
                  <br/><br/>
                  <input type="password" placeholder="Confirmez le mot de passe" id="mdp2" name="mdp2" onChange={handleChange}/>
                  <br/><br/><br/>
                 <input type="submit" name="forminscription" id="btn-i" value="S'inscrire"/>
                 <br/><br/>

              </form>
              <Link to ="/connexion"><button className='btn-3'>Se connecter</button></Link>

              {response ? <p>{response}</p> : null}

          </div>

        </section>


</>

);
}

export default Inscription;


