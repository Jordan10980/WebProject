import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate, useLocation } from 'react-router-dom';
import './Editionprofil.css'



const Editionprofil=()=>{

  const [pseudo, setPseudo] = useState(window.myGlobalPseudo);
  const [mail, setMail] = useState(window.myGlobalMail);

    const [formData, setFormData] = useState({
        id:window.myGlobalId,
        newpseudo: pseudo,
        newmail: mail,
        newmdp1: '',
        newmdp2: '',
      });
      const [response, setResponse] = useState(null);
      
      const navigate = useNavigate();
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
        if (name === "newpseudo") {
            setPseudo(event.target.value);
          }
        if (name === "newmail") {
          setMail(event.target.value);
        }
      };

      const handleSubmit = (event) => {
           event.preventDefault();

           fetch("https://mairie-beauvais.local/api/editionprofil.php", {
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

              if (data.includes("Votre pseudo a bien été modifié\n")) {
              // console.log(data);
              setTimeout(() => {
                navigate(`/profil?id=${window.myGlobalId}`);
              }, 1300);
            }
            else if (data.includes("Votre adresse mail a bien été modifié\n")) {
              // console.log(data);
              setTimeout(() => {
                navigate(`/profil?id=${window.myGlobalId}`);
              }, 1300);
            }
            else if (data.includes("Votre mot de passe a bien été modfifié !\n")) {
              // console.log(data);
              setTimeout(() => {
                navigate(`/profil?id=${window.myGlobalId}`);
              }, 1300);
            }else{
              setResponse(data);
              console.log(data);
            }
            })
            .catch((error) => {
              console.error(error);
            });
      };

    return( 
    <>
        <section className='all'>
            <section className="contain-2">
                <h3 className='eprofil'>Edition du profil</h3>
                <p className='info'> Vous aurez prochainement la possibilité de changer l'image de votre avatar </p>
                <br /><br />
            

            <div className="edition_profil">
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                    
                    <input className="echamps" type="text" placeholder="Nouveau pseudo" name="newpseudo" value={pseudo} onChange={handleChange} />
                <br /><br/>
                    <input className="echamps" type="email" placeholder="Nouveau mail" name="newmail" value={mail} onChange={handleChange}  />
                <br /><br/>
                    <input className="echamps" type="password" placeholder="Nouveau mot de passe" name="newmdp1" onChange={handleChange} />
                <br /><br/>
                    <input className="echamps" type="password" placeholder="Confirmez votre mdp" name="newmdp2" onChange={handleChange} />
                <br /><br /><br/>

                <div className='btn-bas-2'>
                    <input className='majbtn' type="submit" name="editprofil" id="btn1" value="Mettre à jour mon profil "/>
                    <Link to={`/profil?id=${window.myGlobalLoginId}`} className='abtn'>Annuler</Link>
                </div>
                </form>
                
                
                {response ? <p>{response}</p> : null}

                <br />
                <br />
            </div>
            </section>
        </section>

    </>





    
    )
}

export default Editionprofil;