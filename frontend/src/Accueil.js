import React from 'react';
import "./Accueil.css";

function Accueil() {

    return(
        <body className='b-body'>
            <section className='premier'>
                <h3>Bienvenue</h3>
                <div className='bouton'>
                    <a href='https://www.beauvaisis.fr/' className='bouton1'>En savoir Plus</a>
                </div>
            </section>

            <section className='actu'>
                    <h3 className='titre'>Actualité</h3>

                <div className='box-card'>

                  <div className="cards">
                        <div className='image-container'>
                            <img src="http://www.beauvaisis.fr/images/actus/2301-carriere-souterraine-st-martin-le-noeud.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>27 janvier 2023</span>
                            <h3>La Carrière souterraine de saint-martin-le-noeud livre ses secrets</h3>
                            <p> Depuis 10 ans, l’unité de recherche METIS de Sorbonne Université explore la carrière souterraine de Saint-Martin-le-Noeud
                                 pour étudier les transferts d’eau et de contaminants entre la surface et la nappe phréatique.
                            </p>
                            <a href="http://www.beauvaisis.fr/actualites/actualites-du-beauvaisis/la-carriere-souterraine-de-saint-martin-le-noeud-livre-ses-secrets.html" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>

                    <div className="cards">
                        <div className='image-container'>
                            <img src="http://www.beauvais.fr/images/actus3/2301-permis-citoyen.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>12 Janvier 2023</span>
                            <h3>Les 400 coups de pouce au permis</h3>
                            <p> Depuis son lancement en 2014, le dispositif « Permis citoyen » de la Ville de Beauvais a bénéficié à 400 
                                jeunes beauvaisiens, qui ont pu obtenir leur permis de conduire à moindre coût.
                            </p>
                            <a href="http://www.beauvais.fr/actualites/3044-les-400-coups-de-pouce-au-permis.html" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>

                    <div className="cards">
                        <div className='image-container'>
                            <img src="http://www.beauvaisis.fr/images/actus/2212-ecole-dart-inscription.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>19 Décembre 2022</span>
                            <h3>Inscrivez-vous à l'école d'art !</h3>
                            <p> Il reste des places disponibles dans les cours et ateliers de l'École d'Art du Beauvaisis.
                                 Si vous vous inscrivez à compter du 12 décembre, vous bénéficierez d’un tarif réduit pour le reste de l’année.
                            </p>
                            <a href="http://www.beauvaisis.fr/actualites/actualites-du-beauvaisis/inscrivez-vous-a-l-ecole-d-art.html" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>

                    <div className="cards">
                        <div className='image-container'>
                            <img src="http://www.beauvaisis.fr/images/actus/2212-pole-mobilite-1.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>19 Décembre 2022</span>
                            <h3>La Pôle Mobilité du Beauvaisis, moteur de l'insertion</h3>
                            <p> Avec le soutien de partenaires privés et publics, dont la Ville de Beauvais et la Communauté d’Agglomération
                                 du Beauvaisis, le Pôle Mobilité du Beauvaisis s’évertue à apporter un large éventail de solutions aux habitants de l’Agglomération du Beauvaisis, (...)
                                 
                            </p>
                            <a href="http://www.beauvaisis.fr/actualites/actualites-du-beauvaisis/le-pole-mobilite-du-beauvaisis-moteur-de-l-insertion.html" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>

                    <div className="cards">
                        <div className='image-container'>
                            <img src="http://www.beauvaisis.fr/images/homepage/home1/2302-lumieres-dhiver-home1.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>19 Décembre 2022</span>
                            <h3>Festival littéraire des médiathèques du Beauvaisis</h3>
                            <p> La Communauté d'Agglomération du Beauvaisis et le Réseau des médiathèques du Beauvaisis vous convient 
                                à des temps de partage autour de la littérature et des récits, avec son nouveau Festival Lumières d'hiver du 3 au 11 février 2023. (...)
                            </p> 
                            <a href="https://mediatheques.beauvaisis.fr/in/faces/homeInBook.xhtml" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>

                    <div className="cards">
                        <div className='image-container'>
                            <img src="http://www.beauvaisis.fr/images/actus/2301-installation-du-cm-jeunes-laversines.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>16 Janvier 2023</span>
                            <h3>Le conseil municipal jeunes a été installé à Laversines</h3>
                            <p> Pendant une année, les élus de la commission Enfance jeunesse de Laversines ont travaillé à la mise en place d’un conseil municipal jeunes. 
                                Il a été installé en octobre dernier.
                            </p>
                            <a href="http://www.beauvaisis.fr/actualites/actualites-du-beauvaisis/le-conseil-municipal-jeunes-a-ete-installe-a-laversines.html" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>

                    <div className="cards">
                        <div className='image-container'>
                            <img src="https://www.macommune.info/wp-content/uploads/2023/01/capture-decran-2023-01-05-a-15.08.17.jpg" alt="article"/>
                        </div>
                        <div className="card-footer">
                            <span>2 Janvier 2023</span>
                            <h3>Beauvais poursuit son recensement - Du 19 janvier au 25 février 2023</h3>
                            <p> Le recensement de la population aura lieu du 19 janvier au 25 février 2023. A Beauvais, Ville de plus de 10 000 habitants, 
                                il sera réalisé sur un échantillon d’environ 8% de ses logements.
                                Si votre foyer est concerné, vous en serez prochainement informé(e) par courrier.
                            </p>
                            <a href="http://www.beauvais.fr/actualites/3034-beauvais-poursuit-son-recensement-du-19-janvier-au-25-fevrier-2023.html" className="read-more"> Voir plus <span>&rarr;</span></a>
                        </div>
                    </div>


                </div>    
                </section>
            </body>
        
    );
}

export default Accueil;