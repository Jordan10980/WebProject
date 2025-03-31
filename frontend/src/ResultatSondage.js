import React, { useEffect, useState } from 'react';
import './Sondage.css';

function ResultatSondage() {
    const [latestEntry, setLatestEntry] = useState({});

    useEffect(() => {
        fetch('https://mairie-beauvais.local/api/resondage.php')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLatestEntry(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <div className='mainContainer'>
                <div className='poll'>
                    <div className='stitle'>
                        
                    </div>
                    {latestEntry.age ? (
                        <div  align="center" className='page1'>
                        <h3>Résultat du sondage</h3>
                            <div align="center" className='left-info'>
                                <br />
                                <h2>Mes informations</h2>
                                
                                <p className='moi'>Moi : {latestEntry.prenom} {latestEntry.nom} </p>
                                <p className='age'>Date de naissance : {latestEntry.age}</p>
                                <p className='city'>Ville : {latestEntry.ville}</p>
                                <p className='foods'>Aliments choisis : {latestEntry.aliments.join(", ")}</p><br /><br/>

                                <h2>Répartitions par âge</h2>
                               
                                <p className='enfants'>Enfants (0 - 14 ans) : {latestEntry.enfants}</p>
                                <p className='adolescents'>Adolescents (15 - 24 ans) : {latestEntry.adolescents}</p>
                                <p className='adultes'>Adultes (25 à 64 ans) : {latestEntry.adultes}</p>
                                <p className='aines'>Aînés (65 ans et plus) : {latestEntry.aines}</p> <br/><br/>

                                <h2>Statistiques générales</h2>
                            
                                <p className='total_respondents'>Nombre total de répondants : {latestEntry.total}</p>
                            </div>

                    
                                

                    
                            
                        
                        </div>
                    ) : (
                        <p>Chargement...</p>
                    )}
                </div>
            </div>
           
        </>
    );
};

export default ResultatSondage;
