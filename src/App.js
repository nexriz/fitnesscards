import React from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';

// Pages
import Home from './modules/Home';
import Login from './modules/Login';
import Cards from './modules/Cards';

import NavbarBottom from './components/NavbarBottom';
import CardEditor from './components/CardEditor';
import patternsport from './Sports.png';
import Navigation from './components/Navigation';

import { fetchCards, dispatchsortCards } from './components/redux/actions/cardActions';
import Authenticate from './utilz/Authenticate';


const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isAuth: state.user.isAuth
	}
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards })
export default class App extends React.Component {
  _Profiler() {
  		return (
    		<div style={{margin: 'auto'}}>
    			<CardEditor />
    		</div>
    	)
  	}
  _Search(test) {
  		return (
    		<div style={{margin: 'auto'}}>
    			<h1 style={{textAlign: 'center', marginTop: '100px'}}>Sök</h1>
    		</div>
    	)
  }
  render() {
  	const { isAuth } = this.props;
    return (
    	<Router>
			<Page id="page">
				<Route render={({location, history, match}) => {
					return (
						<div>
							<Navigation location={location}/>
						      <RouteTransition
						      	component="div"
						        pathname={location.pathname}
						        atEnter={{ translateX: 15, opacity: 0 }}
						        atLeave={{ translateX: 15, opacity: 0 }}
						        atActive={{ translateX: 0, opacity: 1 }}
						        mapStyles={styles => ({ 
						        	transform: `translateX(${styles.translateX}%)`, 
						        	opacity: `${styles.opacity}`, position: 'fixed', 
						        	left: '0', 
						        	right: '0'
						        })}
						      >
							      <Switch key={location.key} location={location}>
				    				<Route exact path="/" component={Home}/>		
				    				<Route exact path="/kort" component={Cards}/>
								    <Route path="/skapa" component={Authenticate(this._Profiler)} />	    
								    <Route path="/sök" component={this._Search}/>	    
								    <Route path="/login" component={Login} />
								   </Switch>
								</RouteTransition>
							<NavbarBottom isAuth={isAuth && isAuth}/>
						</div>
					);
				}} />
			</Page>
    	</Router>
    );
  }
}


const Page = styled.div`
`;

/* eslint-disable */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Anton|Audiowide|Chewy|Rubik+Mono+One');
	@font-face {
		font-family: 'Audiowide', cursive;
	}
	* {
		font-family: 'Audiowide', cursive;
		-webkit-font-smoothing: antialiased;
		user-select: none;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
		list-style-type: none;
	}
	a {
		color: rgba(255,255,255,1);
	}
	body {
		margin: 0;
		padding: 0;
		background: url(${patternsport});
		overflow-x: hidden;
	}
	.my-menu {
		transition: background-color 0.15s ease-in-out;
		&:hover {
			background-color: #EA454B;
		}
	}
	.navbar-hide {
		height: 0px;
	}
	.fade-enter {
		opacity: 0;
	}
   .fade-enter-active {
	  opacity: 1;
	  transition: opacity 500ms ease-in;
	}
	.fade-leave {
	  opacity: 1;
	}
    .fade-leave-active {
	  opacity: 0.01;
	  transition: opacity 300ms ease-in;
	}
	::-webkit-scrollbar { 
    display: none; 
	}
	.active {
		color: #EA454B;
	}
`;

const Footer = styled.footer`
	position: relative;
	bottom: 0px;
	height: 300px;
	width: 100%;
	background-color: rgba(241,241,241,0.7);
	color: black;
	display: flex;
	align-items: center;
	border: 1px solid rgba(0,0,0,0.1);
`;