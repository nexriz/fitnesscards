import React from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './transition.css';

// Pages
import LoginPage from './LoginPage';
import NavbarBottom from './components/NavbarBottom';

import Card from './components/Card';
import CardEditor from './components/CardEditor';
import pattern from './topography.png';
import patternsport from './Sports.png';
import Navigation from './components/Navigation';

import { fetchCards, dispatchsortCards } from './components/redux/actions/cardActions';
import Authenticate from './utilz/Authenticate';
import AuthService from './utilz/AuthService';
import VirtualList from 'react-tiny-virtual-list';

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isAuth: state.user.isAuth
	}
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards })
export default class App extends React.Component {
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

  _Profiler = () => 
  		<div style={{margin: 'auto'}}>
  			<Navigation header="Profiler"/>
  			<CardEditor />
  		</div>
  _Search = (test) => {
  		return (
	    		<div style={{margin: 'auto'}}>
	    			<Navigation header="Sök"/>
	    			<h1 style={{textAlign: 'center', marginTop: '100px'}}>Sök</h1>
	    		</div>
    	)
  }
  render() {
  	const { isAuth } = this.props;
    return (
    	<Router>
			<Page id="page">
    				<Route exact path="/" render={() => 
						<Container>
							<Navigation header="Hem"/>
	    					<CardsContainer>
	    							<InfiniteScroll cards={this.props.cards} closeColl={this.closeColl} onSortEnd={this.onSortEnd}/>
	    					</CardsContainer>
		  				</Container>
    				}/>			
				    <Route path="/skapa" component={Authenticate(this._Profiler)} />	    
				    <Route path="/sök" component={this._Search}/>	    
				    <Route path="/login" component={LoginPage} onEnter={requireAuth}/>
				<NavbarBottom isAuth={isAuth && isAuth}/>
			</Page>
    	</Router>
    );
  }
}


const InfiniteScroll = ({ cards, closeColl, onSortEnd }) => {
	return <Cards 
			cards={cards} 
			closeColl={closeColl} 
			onSortEnd={onSortEnd}
			useDragHandle={true}
			useWindowAsScrollContainer={true}/>
}


const Cards = SortableContainer(({cards}) =>{
	return <StyledVirtualList
			    width='auto'
			    height={window.innerHeight < 600 ? 600 : window.innerHeight}
			    itemCount={cards.length}
			    itemSize={205}
			    scrollDirection='vertical'
			    renderItem={({index, style}) => <Card style={style} key={`item-${index}`} index={index} myKey={index} props={cards[index]} />}
		    />
	}
)

const StyledVirtualList = styled(VirtualList)`
	-ms-overflow-style: -ms-autohiding-scrollbar;	
`;
const Page = styled.div`
`;
const CardsContainer = styled.div`
	width: 322px;
	margin: auto;
	-ms-overflow-style: -ms-autohiding-scrollbar;
`;
const Container = styled.div`
	margin: auto;
	margin-top: 65px;
	margin-bottom: 50px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	-ms-overflow-style: -ms-autohiding-scrollbar;
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