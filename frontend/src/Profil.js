import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate, useLocation } from 'react-router-dom';
import './Profil.css';
import imglogo from './avatars/default.jpeg'




const Profil=()=>{

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const [pseudo, setPseudo] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [mail, setMail] = useState(null);
  const [id, setId] = useState(null);
  const [pathimg, setPathImg] = useState(null);

  useEffect(() => {
      handleClick();
    }, []); 

  const handleClick = () => {

  fetch('https://mairie-beauvais.local/api/profil.php', {
      method: 'POST',
      body: params
    })
      .then(response => response.text())
      .then(data => {
          const lines = data.split('\n');
          setPseudo(lines[0])
          window.myGlobalPseudo = lines[0];
          setAvatar(lines[1])
          setMail(lines[2])
          window.myGlobalMail = lines[2];
          setId(lines[3])
          window.myGlobalId = lines[3];
          setPathImg(require("./avatars/"+String(lines[1])));
          window.myGlobalPath = pathimg;
      })
      .catch(error => {
      });
  };



    return( 
    <>
      <section className='all'>
        <section className="contain-1">
        <h3 className='nomprofil'>Profil de {pseudo}</h3>
          <section className='profil'>
              <div className="profil-1">
                <img className='sizeimg' src={imglogo} alt="imglogo" />  
                {/*  ne pas oublier remplacer le src={imglogo} par src={pathimg}  */}
              </div>
              <div className='profil-2'>
                <div className='mail'>Pseudo : {pseudo}</div>
                <br/>
                <div className='mail'>Mail : {mail}</div>
              </div>
          </section>

              <Link to={`/editionprofil`}className="valid2"> 
                  Editer mon profil
              </Link> 
              {/*  <Link to={`/editionprofil?id=${id}`}className="valid2"> 
                      Editer mon profil
                   </Link>  */}
              <Link to="/sedeconnecter" className="valid2">Se déconnecter</Link>
        </section>
      </section>
    </>





    
    )
}

export default Profil;