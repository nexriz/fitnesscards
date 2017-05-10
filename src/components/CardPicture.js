import React from 'react';
import styled from 'styled-components';


export default class CardPicture extends React.Component {
	state = {
		modal: false
	}
	componentDidMount() {
		this.event = document.getElementById('test1')
		this.event.addEventListener('onmousedown',this.test, false)
	}
	mouseEventClick = (e) => {
		return;
		e.preventDefault();
		this.setState(() => {
			return {modal: !this.state.modal}
		})
	}
	render() {
		const { picture } = this.props;
		const { modal } = this.state;

		return (
			<Picture id="test1"
				onClick={this.mouseEventClick} 
				style={{
					filter: `${this.state.modal ? 'blur(1px)' : 'none'}`,
					background: `url(${picture ? picture : 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
 			}}/>
		)
	}
}

const Picture = styled.div`
	height: 200px;
	max-width: 100%;
	background-size: cover!important;
	z-index: 3;
	transform: translate(0, 0);
	border-bottom: 1px solid rgba(0,0,0,0.5);
	border-top: 1px solid rgba(0,0,0,0.2);
	transition: filter 0.3s
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