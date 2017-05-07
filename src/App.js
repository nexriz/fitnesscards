import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Card from './components/Card';
import CardEditor from './components/CardEditor';
import pattern from './topography.png';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarBottom from './components/NavbarBottom';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';



// Pages
import LoginPage from './LoginPage';

import { fetchCards, dispatchsortCards } from './components/redux/actions/cardActions';


const Profiler = () => <div style={{margin: 'auto'}}><CardEditor></CardEditor></div>

const Search = () => <div style={{margin: 'auto'}}><h1>Sök</h1></div>

const SortableItem = SortableElement(({item, close}) => 
	<li style={{listStyleType: 'none'}}><Card close={close} title={item.title} color={item.color} picture={item.picture}/></li>
)


const mapStateToProps = (state) => {
	return { cards: state.cards }
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards })
export default class App extends React.Component {
  constructor() {
  	super();
  }
  state = { close: null }
  componentWillMount() {
  	this.props.fetchCards({})
  }
  onSortEnd = ({oldIndex, newIndex}) => {
  	const newCards = arrayMove(this.props.cards, oldIndex, newIndex);
  	this.props.dispatchsortCards(newCards);
  	this.setState({close: null})
  }
  closeColl = () => {
  	this.setState({close: false})
  }
  render() {
    return (
    	<Router>
	    	<Page id="page">
	    		<Navigation />
	    		<Route render={({ location }) => (
				    <Container>
		    				<Route exact path="/" render={() => <Cards 
		    					close={this.state.close} 
		    					onSortStart={this.closeColl} 
		    					onSortEnd={this.onSortEnd} 
		    					cards={this.props.cards}
		    					pressDelay={800} />}/>
						    <Route path="/profiler" component={Profiler}/>	    
						    <Route path="/sök" component={Search}/>	    
						    <Route path="/login" component={LoginPage}/>
				  	</Container>
	    		)}/>
					    	<Footer><h3 style={{margin: 'auto', paddingBottom: '30px'}}>Footer</h3></Footer>	    
	    		<NavbarBottom />
	    	</Page>
    	</Router>
    );
  }
}

const Cards = SortableContainer(({cards, close}) =>
    	<ul>
    		{cards.map((item, i) => <SortableItem key={`item-${i}`} index={i} item={item} close={close}/>)}
    	</ul>
)




const Page = styled.div`
	height: 100%;
`;

const Container = styled.main`
	margin: auto;
	margin-top: 70px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

/* eslint-disable */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Anton|Audiowide|Chewy|Rubik+Mono+One');
	@font-face {
		font-family: 'Chewy', cursive;
	}
	.public-DraftEditorPlaceholder-inner {
	  position: absolute;
	  transform: translate(35px, 0);
	  color: rgba(0,0,0,0.4);
	}
	* {
		font-family: 'Audiowide', cursive;
		-webkit-font-smoothing: antialiased;
		user-select: none;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
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