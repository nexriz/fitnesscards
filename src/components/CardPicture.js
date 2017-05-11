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
