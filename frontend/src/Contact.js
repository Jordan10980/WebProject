import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

import "./Contact.css";

function Contact() {

  const [state, handleSubmit] = useForm("xlekbkdv");
  if (state.succeeded) {
    
      // return <p><br/><br/><br/><br/><br/>Thanks for joining!</p>;
      return <div className='envoie_contact'>
        <br/><br/><br/><br/><br/>
        <p>Votre message a bien été envoyé</p>
        </div>
  };

    return (
      <>
      <div className="container">
        <h3>Nous Retrouver</h3>
        

      <div className='double-contenu'>

        <div className='contenu'>

            <div className="carte">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.907679812469!2d2.07988231547164!3d49.42955936827393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e706cce059d537%3A0x6a0ca46432eef192!2sMairie%20de%20Beauvais!5e0!3m2!1sfr!2sfr!4v1674860630267!5m2!1sfr!2sfr" width="600" height="450" style={{ bordure : 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="info">
                  <h4>Emplacement</h4>
                  <p>1 Rue Desgroux, 60000 Beauvais, 03 44 79 40 00</p>
                  <br/>
                  <h4>Horaire</h4>
                  <p>Lundi - Vendredi <br/> 07:00 - 20:00 <br/><br/> Les jours d'ouvertures et les horaires peuvent être différents en fonction du service.</p>
                  <a href='http://www.beauvais.fr/votre-mairie/horaires.html'>Pour plus de détail, cliquez ici </a>
            </div>      
        </div>

        <div className="contact_form">
                  <h4>Envoyez-nous un message</h4>
                  <br/>
                    <form onSubmit={handleSubmit}>
                        
                        <input type="name" id='nom' name="nom" placeholder='Nom*' required/>
                        <ValidationError prefix="Nom" field="Nom :"  errors={state.errors} />
                        <br/>
                       
                        <input type="email" id="email" name="email"  placeholder="E-mail*" required/>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        <br />
                        
                        <input type="tel" id="tel" name="tel" placeholder="Téléphone"/>
                        <ValidationError prefix="Tel" field="tel"  errors={state.errors} />
                        <br />    
                        
                        <input type="text" id="objet" name="objet"placeholder="Objet du message*" required/>
                        <ValidationError prefix="Objet" field="objet"  errors={state.errors} />
                        <br />    

                        <textarea id="message" name="message" placeholder="Ecrivez un message ..." required/>
                        <ValidationError prefix="Message" field="message"  errors={state.errors} />
                        <br />

                        <button  className="envoyer" type="submit" name="formcontact" disabled={state.submitting}>Soumettre</button>
                          
                      </form>

                        
          </div>


            </div>
          </div>
    </>
    
    );

}

function ContactAffiche() {
  return (
    <Contact />
  );
}
export default ContactAffiche;




    
