import React from 'react';
import styled from 'styled-components';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const NavbarBottom = ({isAuth}) => {
	return isAuth
		? 	<NavBar>
				<Redirect to="/" />
	    		<Navitem activeStyle={{color: '#EA454B'}} exact to="/"><Ic className="material-icons">home</Ic><Itext>Hem</Itext></Navitem>
				<Navitem activeStyle={{color: '#EA454B'}} to="/sök"><Ic className="material-icons">search</Ic><Itext style={{transform: 'translate(0, -21px)'}}>Sök</Itext></Navitem>
	    		<Navitem activeStyle={{color: '#EA454B'}} to="/skapa"><Ic className="material-icons">library_add</Ic><Itext style={{transform: 'translate(0, -21px)'}}>Skapa</Itext></Navitem>
	    		<Navitem activeStyle={{color: '#EA454B'}} to="/favoriter"><Ic className="material-icons">favorite</Ic><Itext style={{transform: 'translate(0, -21px)'}}>Favoriter</Itext></Navitem>
	    		<Navitem activeStyle={{color: '#EA454B'}} to="/profil"><Ic className="material-icons">account_circle</Ic><Itext style={{transform: 'translate(0, -21px)'}}>Profil</Itext></Navitem>
	    	</NavBar>
	    :   <NavBar>
	    		<Navitem activeStyle={{color: '#EA454B'}} exact to="/"><Ic className="material-icons">home</Ic><Itext>Hem</Itext></Navitem>
				<Navitem activeStyle={{color: '#EA454B'}} to="/sök"><Ic className="material-icons">search</Ic><Itext style={{transform: 'translate(0, -21px)'}}>Sök</Itext></Navitem>
	    		<Navitem activeStyle={{color: '#EA454B'}} to="/login"><Ic className="material-icons">input</Ic><Itext style={{transform: 'translate(0, -21px)'}}>Logga in</Itext></Navitem>
	    	</NavBar>
}

const Ic = styled.i`
	margin: 15px 18px;
	transform: scale(1) translate(0, -8px);
`;
const Itext = styled.div`
	color: white;
	position: relative;
	z-index: 200;
	transform: translate(0,-22px);
	font-size: 10px;
	width: inherit;
	text-align: center;

`;

export default NavbarBottom;

const NavBar = styled.nav`
	position: fixed;
	width: 100%;
	height: 50px;
	background-color: #111111;
	display: flex;
	justify-content: center;
	bottom: 0px;
	user-select: none;
	z-index: 100;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
`;

const Navitem = styled(NavLink)`
	width: 60px;
	height: 50px;
	background-color: #111111;
	transition: color 0.3s ease-in-out;
	&:hover {
		color: #EA454B;
	}
	&:focus {
		color: white;
	}
	user-select: none;
	cursor: pointer;
	z-index: 100;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	text-decoration: none;
`;