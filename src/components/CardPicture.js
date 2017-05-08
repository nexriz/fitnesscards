import React from 'react';
import styled from 'styled-components';


export default class CardPicture extends React.Component {
	state = {
		modal: false
	}
	mouseEventClick = () => {
		return;
		this.setState((state) => {
			this.documentBody(!state.modal)
			return {modal: !state.modal}
		})
	}
	documentBody = (modal) => {
		if(modal) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "auto";
	}
	render() {
		const { picture } = this.props;
		const { modal } = this.state;

		return (
			<div >

 				{modal 
 					?
 					<ModalContainer onClick={this.mouseEventClick}>
 						<ModalBody>
	 						<Picture 
			 					onClick={this.mouseEventClick} 
			 					style={{
	 								background: `url(${picture ? picture : 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
	 						}} />	
 						</ModalBody>
 					</ModalContainer>
 					: <Picture 
	 					onClick={this.mouseEventClick} 
	 					style={{
	 						background: `url(${picture ? picture : 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
 						}} />
 					}
			</div>
			)
	}
}

const Picture = styled.div`
	height: 200px;
	max-width: 100%;
	background-size: cover!important;
	z-index: 3;
	transform: translate(0, 0);
	border-bottom: 1px solid rgba(0,0,0,0.2);
	border-top: 1px solid rgba(0,0,0,0.2);
`;

const ModalContainer = styled.div`
	marin: 0;
	padding: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,1);
	position: fixed;
	top: 0;
	left: 0;
`;
const ModalBody = styled.div`
	margin: auto;
	width: 320px;
	height: 162px;
	position: relative;
`;