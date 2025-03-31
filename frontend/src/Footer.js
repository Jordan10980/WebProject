
import {FaBars , FaTimes} from "react-icons/fa"
import logo from './image/logo agglo.png'
import "./Footer.css";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Footer() {
	return (
		<footer className="footer">
        <div className="box-container">

            <div className="box">
                <h3>Navigation</h3>
                <Link to="/" className="nav-link">Accueil</Link>
            	<Link to="/transport" className="nav-link">Transport</Link>
				<Link to="/nousretrouver" class="nav-link">Nous Retrouver</Link>
				<Link to="/sondage" className="nav-link">Sondage</Link>
            </div>

            <div className="box">
                <h3>Contact</h3>
                <p> 03 44 79 40 00</p>
                <p>1 rue Desgroux, 60021 Beauvais Cedex </p>
                <p>Newsletter && Fil info SMS</p> 
            </div>

            <div className="box">
                <h3>Suivez-nous</h3>
                <a href="https://fr.linkedin.com/company/ville-de-beauvais"><i className="fab fa-linkedin-in"></i>linkedin</a>
                <a href="https://www.facebook.com/beauvaisis"><i className="fab fa-facebook-f"></i>facebook</a>
                <a href="https://www.instagram.com/villedebeauvais/?hl=fr"><i className="fab fa-instagram"></i>instagram</a>
                <a href="https://twitter.com/villedebeauvais?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i>twitter</a>
            </div>

        
        </div>
        <div className="log"><Link to="/" className="logo"><img src={logo} alt=""/></Link></div>
        <div className="credit"><span> © 2019 | Mairie de Beauvais - BP 60330 - 1, rue Desgroux - 60021 Beauvais Cedex | Tél : 03 44 79 40 00 | Mentions légales</span></div>

    </footer>

    );
}

export default Footer;
