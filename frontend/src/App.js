import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Footer from "./Footer";
import Contact from "./Contact";
import Accueil from"./Accueil";
import Transport from './Transport';
import Sondage from './Sondage';
import Profil from './Profil';
import Editionprofil from './Editionprofil';
import Sedeconnecter from './Sedeconnecter';
import ResultatSondage from './ResultatSondage';

function App() {

	return (


		<Router>
		<div>	
		  <Navbar />
			<Routes>
			  <Route path="/" element={<Accueil />} />
			  <Route path="/connexion" element={<Connexion />} />
			  <Route path="/sedeconnecter" element={<Sedeconnecter/>}/>
			  <Route path="/nousretrouver" element={<Contact />} />
			  <Route path="/inscription" element={<Inscription />} />
			  <Route path="/transport" element={<Transport />} />
			  <Route path="/sondage" element={<Sondage />} />
			  <Route path="/profil" element={<Profil />} />
			  <Route path='/editionprofil' element={<Editionprofil />} />
			  <Route path='/resultatsondage' element={<ResultatSondage />} />
			</Routes>
			<Footer />
		</div>
	  </Router>



	);
}

export default App;


