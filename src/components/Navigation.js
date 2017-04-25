import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';


export default class Navigation extends React.Component {
  state = {
  	test: null
  }
  componentDidMount() {
  	this.sideNav = document.getElementById('side-nav')
  	this.navbar = document.getElementById('navbar')
  	// this.oldScroll = document.body.scrollTop
  	// this.scrollEvent = document.addEventListener('scroll', this.scrollChecker)
  }
  // componentWillUnmount(){
  // 	document.removeEventListener('scroll', this.scrollEvent)
  // }
  // scrollChecker = (e) => {
  // 	this.sideNav.style.width = '0';
  // 	this.setState((state) => {
	 //  	if(document.body.scrollTop > this.oldScroll) 
	 //  		return { test: { position: 'fixed', height: '0px'}, isNavOpen: false }
	 //  	if(document.body.scrollTop < this.oldScroll)
	 //  		return { test: { position: 'fixed', height: '60px'}, isNavOpen: false }
  		
  // 	})
  // 	this.oldScroll = document.body.scrollTop
  // }
  onClick = (e) => {
  	this.setState((state) => {
  		if(state.isNavOpen) {
  			this.sideNav.style.width = '0';
  			return { isNavOpen: false }
  		}
  		else {
  			this.sideNav.style.width = '300px';
  			return { isNavOpen: true }
  		}
  	})
  	this.sideNav.style.width = '300px';
  }
  closeNav = () => {
  	this.setState((state) => {
  		if(state.isNavOpen) {
  			this.sideNav.style.width = '0px';
  			return { isNavOpen: false }
  		}
  	})
  }
  render() {
    return (
      <div>
		<Navbar id="navbar" style={this.state.test} >
			<i onClick={this.onClick} className="small material-icons my-menu" style={{color: 'white', float: 'right', padding: '15px', cursor: 'pointer'}}>view_module</i>
		</Navbar>
		<SideNav id="side-nav" onClick={this.closeNav}>
			<Divider />
			<NavLink to="/"><NavItem><i className="material-icons" style={{paddingRight: '10px'}}>perm_identity</i> Hem</NavItem></NavLink>
			<NavLink to="/profiler"><NavItem><i className="material-icons" style={{paddingRight: '10px'}}>perm_identity</i> Profiler</NavItem></NavLink>
			<NavLink to="/login"><NavItem><i className="material-icons" style={{paddingRight: '10px'}}>input</i> Logga in</NavItem></NavLink>
		</SideNav>      	
      </div>
    );
  }
}



const SideNav = styled.div`
	z-index: 10;
	height: 100%;
	width: 0px;
	background-color: #111111;
	position: fixed;
	transition: width 0.3s ease-in-out;
	overflow: hidden;
	padding-top: 100px;
`;

const Divider = styled.div`
	width: 300px;
	border-bottom: 1px solid rgba(0,0,0,0.3);
`
const NavItem = styled.div`
	width: 300px;
	padding: 5px;
	display: flex;
	justify-content: center;
	color: white;
	cursor: pointer;
	border-bottom: 1px solid rgba(0,0,0,0.3);
	transition: background-color 0.15s ease-in-out;
	&:hover {
		background-color: #EA454B;
	}
`;

const Navbar = styled.header`
	width: 100%;
	height: 60px;
	background-color: #111111;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	z-index: 5;
	position: absolute;
	transition: height 0.2s linear;
	overflow: hidden;
  top: 0;
`
