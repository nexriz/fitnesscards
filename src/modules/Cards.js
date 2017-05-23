import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import VirtualList from 'react-tiny-virtual-list';
import { fetchCards, dispatchsortCards } from '../components/redux/actions/cardActions';

import Card from '../components/Card';

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isAuth: state.user.isAuth
	}
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards })
export default class CardComponent extends React.Component {
	componentWillMount() {
		console.log(this.props)
  		this.props.fetchCards({})
  	}
	onSortEnd = ({oldIndex, newIndex}) => {
	  	const newCards = arrayMove(this.props.cards, oldIndex, newIndex);
	  	this.props.dispatchsortCards(newCards);
	  	this.setState({close: null})
  	}
	render() {
		return (
			<Container>
				<Route key="dawd" path="/kort/:id"/>
				<CardsContainer>
						<InfiniteScroll cards={this.props.cards} closeColl={this.closeColl} onSortEnd={this.onSortEnd}/>
				</CardsContainer>
			</Container>
		)
	}
}

const StyledVirtualList = styled(VirtualList)`
	-ms-overflow-style: -ms-autohiding-scrollbar;	
`;

const CardsContainer = styled.div`
	width: 322px;
	margin: auto;
	-ms-overflow-style: -ms-autohiding-scrollbar;
`;
const Container = styled.div`
	margin-top: 65px;
	-ms-overflow-style: -ms-autohiding-scrollbar;
`;

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
			    height={window.innerHeight - 118}
			    itemCount={cards.length}
			    itemSize={205}
			    scrollDirection='vertical'
			    renderItem={({index, style}) => <Card style={style} key={`item-${index}`} index={index} myKey={index} props={cards[index]} />}
		    />
	}
)
