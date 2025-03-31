import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import T1 from './image/transport.jpeg'
import T2 from './image/transport2.jpeg'

import "./Transport.css";

function Transport(){
    return(
        <>
        <body className='body'>
            <h3 className='title'>Transports urbains Corolis  </h3>
            <section className="first">
                <div className="text">
                    <h4>Rendre vos déplacements toujours plus agréables</h4><br/>
                    <p>Avec le réseau Corolis, la communauté d’agglomération du Beauvaisis met tout en œuvre pour vous simplifier la vie et vous offrir un réseau de transports urbains toujours plus efficace.
                        Le réseau Corolis a été entièrement modernisé pour devenir un réseau plus clair, lisible et efficace. Ce nouveau réseau, digne d’une commune comme Beauvais, a été lancé le 29 août 2016. </p>
                </div>
                <br/>
                <div className="images">
                    <img src={T1} alt=""/>
                </div>
            </section>

            <section className="second">
                <div className="text">
                    <br/><br/>
                    <h4> Le billet unique de transport à 1€ la journée </h4><br/>
                    <p>Depuis janvier 2015, le réseau de transports urbains Corolis propose le ticket BUT, un billet unique de transport à 1€ par jour seulement.
                        Titre de transport simplifié et à usage illimité sur toutes les lignes du réseau, hors services spécifiques (Corolis à la demande et navette express Hôtels), le BUT répond à la volonté de l’agglomération d’encourager l’utilisation des bus par l’ensemble des habitants du territoire.<br/>
                        Ce pass journalier est vendu dans les bus, à l’agence Corolis ainsi que chez les dépositaires. Les usagers pourront charger de 1 à 5 tickets BUT sur un support sans contact (carte ou billet) pass Oise Mobilité, qu’il suffira pour être en règle de valider à chaque montée dans le bus. 
                    </p>
                </div>
                <br/>
                <div className="images">
                    <img src="https://www.corolis.fr/img/galerie/images/1-euro-pour-toute-la-journee.png" alt=""/>
                </div>
            </section>

            <section className="third">
                <div className="text">
                    <br/><br/>
                    <h4> Le parc de véhicules </h4><br/>
                    <p>
                    Soucieuse de son empreinte écologique, la communauté d’agglomération du Beauvaisis, propriétaire des bus et minibus urbains, a choisi la technologie hybride diesel/électrique.
                    Au rythme de 2 acquisitions par an, le parc de bus sera conforme aux normes d’accessibilité d’ici 2019, respectant les termes de la loi de février 2005.
                    </p>
                </div>
                <br/><br/>
                <div className="images">
                    <img src={T2} alt=""/>
                    <br/><br/><br/> 
                </div>
            </section>
        </body>
    </>   

    );
}

export default Transport;