import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/userActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
@connect(state => {
  return {user: state.user}
}, { login, logout })
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
        <Navbar>
          <Header>
            Hem
          </Header>
        </Navbar>
    );
  }
}

const Header = styled.h3`
  color: white;
  text-align: center;
`;

const Navbar = styled.header`
	width: 100%;
	height: 60px;
	background-color: #111111;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	z-index: 5;
	position: fixed;
	transition: height 0.2s linear;
	overflow: hidden;
  top: 0;
`
