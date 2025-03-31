import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from './image/logo agglo.png';
import fr from './image/fr.png'
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const [isLoggedIn, setIsLoggedIn] = useState(false); 
	const [userIdlog, setuserIdlog] = useState(false); 


	useEffect(() => {
		if (window.myGlobalLogin === true) {
		setIsLoggedIn(true);
		setuserIdlog(window.myGlobalLoginId);
		
		}
	}, []);
	  

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	
	return (
		<> 

		{isLoggedIn ? (
                <>
					<header>
						
						<nav ref={navRef}>
							<Link to="/" className="nav-link">Accueil</Link>
							<Link to="/transport" className="nav-link">Transport</Link>
							<Link to="/nousretrouver" className="nav-link">Nous Retrouver</Link>
							<Link to="/sondage" className="nav-link">Sondage</Link>
							<button className="nav-btn nav-close-btn" onClick={showNavbar}>
								<FaTimes />
							</button>
							<div className="section-btn-2">
								<Link to={`/profil?id=${userIdlog}`}><button className='Connexion-btn-2'>Profil</button></Link>
								<Link to ="/sedeconnecter"><button className='Inscription-btn-2'>Déconnexion</button></Link>
							</div>
						</nav>
						<Link to="/" className="logo"><img src={logo} alt=""/></Link>
						<div className="section-btn">
							<Link to={`/profil?id=${userIdlog}`}><button className='Connexion-btn'>Profil</button></Link>
							<Link to ="/sedeconnecter"><button className='Inscription-btn'>Déconnexion</button></Link>
						</div>
						<button className="nav-btn" onClick={showNavbar}>
							<FaBars />
						</button>
					</header>

					</>
             		) : (
                	<>

					<header>
						
						<nav ref={navRef}>
							<Link to="/" className="nav-link">Accueil</Link>
							<Link to="/transport" className="nav-link">Transport</Link>
							<Link to="/nousretrouver" className="nav-link">Nous Retrouver</Link>
							<Link to="/sondage" className="nav-link">Sondage</Link>
							<button className="nav-btn nav-close-btn" onClick={showNavbar}>
								<FaTimes />
							</button>
							<div className="section-btn-2">
								<Link to="/connexion"><button className='Connexion-btn-2'>Connexion</button></Link>
								<Link to ="/inscription"><button className='Inscription-btn-2'>Inscription</button></Link>
							</div>
						</nav>
						<Link to="/" className="logo"><img src={logo} alt=""/></Link>
						<div className="section-btn">
							<Link to="/connexion"><button className='Connexion-btn'>Connexion</button></Link>
							<Link to ="/inscription"><button className='Inscription-btn'>Inscription</button></Link>
						</div>
						<button className="nav-btn" onClick={showNavbar}>
							<FaBars />
						</button>
					</header>

					</>
              )}

		</>
	);
}

export default Navbar;
