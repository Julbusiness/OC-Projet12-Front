import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

export default function Navbar() {


	return (
		<header className="header">
			<nav className="nav-container">
				<div className="group">
					<img src={logo} alt="logo" className="logo-header" />
					<p className="logo-name">SportSee</p>
				</div>
				<ul className="liste-nav">
					<NavLink to="/" className="items">
						Accueil
					</NavLink>
					<NavLink to="/user/:id" className="items">
						Profil
					</NavLink>
					<NavLink to="/setting" className="items">
						Réglage
					</NavLink>
					<NavLink to="/community" className="items">
						Communauté
					</NavLink>
				</ul>
			</nav>
		</header>
	);
}
