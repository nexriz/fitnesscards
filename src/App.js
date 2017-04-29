import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Card from './components/Card';
import pattern from './topography.png';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavbarBottom from './components/NavbarBottom';

export default class App extends React.Component {

  render() {
    return (
    	<Router>
	    	<Page id="page">
	    		<Navigation/>
	    		<Route render={({ location }) => (
				    <Container>
	    				<Route exact path="/" component={Cards}/>
					    <Route path="/profiler" component={Profiler}/>	    
					    <Route path="/sök" component={Search}/>	    
					    <Route path="/login" component={Login}/>
					    <Footer><h3 style={{margin: 'auto', paddingBottom: '30px'}}>Footer</h3></Footer>	    
				  	</Container>
	    		)}/>
	    		<NavbarBottom></NavbarBottom>
	    	</Page>
    	</Router>
    );
  }
}

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

const Profiler = () => <div style={{margin: 'auto'}}><h1>Profiler</h1></div>
const Login = () => <div style={{margin: 'auto'}}><h1>Login</h1></div>
const Search = () => <div style={{margin: 'auto'}}><h1>Sök</h1></div>

const Cards = () => (
    	<div>
	      	<Card title="Övre Bröst" />
	      	<Card color="#ffcdd2" title="Ben" cardPicture={"https://www.bodybuilding.com/images/2016/december/Deadlifts-Should-You-Train-Them-With-Back-Or-Legs-graphics-1-640xh.jpg"}/>
	      	<Card color="#dcedc8" title="Biceps" cardPicture={"http://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/bicep-flx.jpg?itok=2XQJq2Yi&timestamp=1422386260"}/>
    	</div>
	)


const Page = styled.div`
	height: 100%;
`;

const Container = styled.main`
	margin: auto;
	height: 100%;
	padding-top: 100px;
	display: flex;
	flex-direction: column;
`;


injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Anton|Audiowide|Chewy|Rubik+Mono+One');
	@font-face {
		font-family: 'Chewy', cursive;
	}
	* {
		font-family: 'Audiowide', cursive;
		-webkit-font-smoothing: antialiased;
	}
	a {
		color: rgba(255,255,255,1);
	}
	body {
		margin: 0;
		padding: 0;
		background: url(${pattern});
		overflow-x: hidden;
	}
	.collapsible-header {
		background-color: #546e7a;
		border-bottom: 1px solid #546e7a;
	}
	.collapsible-body {
		background-color: white;
	}
	.collapsible.popout>li {
		will-change: margin!important;
		transition: margin 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
`;