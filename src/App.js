import React from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

// Pages
import LoginPage from './LoginPage';
import NavbarBottom from './components/NavbarBottom';

import Card from './components/Card';
import CardEditor from './components/CardEditor';
import pattern from './topography.png';
import Navigation from './components/Navigation';

import { fetchCards, dispatchsortCards } from './components/redux/actions/cardActions';
import Authenticate from './utilz/Authenticate';
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

  _Profiler = () => <div style={{margin: 'auto'}}><CardEditor></CardEditor></div>
  _Search = () => <div style={{margin: 'auto'}}><h1>Sök</h1></div>

  render() {
  	const { isAuth } = this.props;
    return (
    	<Router>
	    	<Page id="page">
	    		<Navigation />
	    		<Route render={({ location }) => (
				    <Container>
		    				<Route exact path="/" render={() =>
		    					<CardsContainer>
		    						<InfiniteScroll cards={this.props.cards} closeColl={this.closeColl} onSortEnd={this.onSortEnd}/>						
		    					</CardsContainer>}
			    			/>
						    <Route path="/skapa" component={Authenticate(this._Profiler)}/>	    
						    <Route path="/sök" component={this._Search}/>	    
						    <Route path="/login" component={LoginPage}/>
				  	</Container>	
	    		)}/> 
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
				lockAxis={true}
				useDragHandle={true}
				useWindowAsScrollContainer={true}/>
}


const Cards = SortableContainer(({cards}) =>{
	console.log(cards.length)
	return <div>
			<VirtualList
			    width='auto'
			    height={600}
			    itemCount={cards.length}
			    itemSize={212}
			    scrollDirection='vertical'
			    renderItem={({index, style}) => <Card style={style} key={`item-${index}`} index={index} myKey={index} props={cards[index]} />}
			/>
		</div>
	}
)

const Page = styled.div`
`;
const CardsContainer = styled.div`
	width: 322px;
	margin: auto;
`;
const Container = styled.main`
	margin: auto;
	margin-top: 70px;
	margin-bottom: 50px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

/* eslint-disable */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Anton|Audiowide|Chewy|Rubik+Mono+One');
	@font-face {
		font-family: 'Audiowide', cursive;
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
		list-style-type: none;
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