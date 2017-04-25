import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default class NavbarBottom extends React.Component {
  render() {
    return (
    	<NavBar>
    		<Navitem activeStyle={{color: '#EA454B'}} exact to="/"><i className="material-icons" style={{margin: '13px 17px', transform: 'scale(1.2)'}}>perm_identity</i></Navitem>
    		<Navitem activeStyle={{color: '#EA454B'}}  to="/profiler"><i className="material-icons" style={{margin: '13px 18px', transform: 'scale(1.2)'}}>library_add</i></Navitem>
    		<Navitem activeStyle={{color: '#EA454B'}}  to="/sök"><i className="material-icons" style={{margin: '13px 18px', transform: 'scale(1.2)'}}>search</i></Navitem>
    		<Navitem activeStyle={{color: '#EA454B'}}  to="/login"><i className="material-icons" style={{margin: '13px 18px', transform: 'scale(1.2)'}}>input</i></Navitem>
    	</NavBar>
    );
  }
}

const NavBar = styled.nav`
	position: fixed;
	width: 100%;
	height: 50px;
	background-color: black;
	display: flex;
	justify-content: center;
	bottom: 0;
	user-select: none;
`;

const Navitem = styled(NavLink)`
	width: 60px;
	height: 50px;
	background-color: black;
	border: 1px solid rgba(0,0,0,0.1);
	transition: color 0.3s ease-in-out;
	&:hover {
		color: #EA454B;
	}
	user-select: none;
	cursor: pointer;
`;