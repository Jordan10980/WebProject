import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate } from 'react-router-dom';
import './Profil.css'


const Sedeconnecter=()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      if (window.myGlobalLogin === true) {
        setIsLoggedIn(false);
        window.myGlobalLogin = false;
      }
    }, []);
  

    const navRef =useRef();


    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            window.myGlobalLogin = false
            window.myGlobalLoginId = 0;
         navigate('/connexion');
        }, 1800);
    
        return () => clearInterval(interval);
      }, [navigate]);




    return( 
    <>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/>

    <div align="center">
        <h1>Vous êtes déconnecté</h1>
    </div>
    
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/>
    </>





    
    )
}

export default Sedeconnecter;