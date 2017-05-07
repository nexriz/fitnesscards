import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

export default class CollItem extends React.Component {
	state = { display: false }
	mouseEventClick = () => {
		this.setState((state) => {
			return {display: !state.display}
		})
	}
	componentWillReceiveProps(nextProps) {
		const { display } = this.state;
		if(nextProps.close !== display) this.setState({display: nextProps.close})
	}
	render() {
		const { display } = this.state;
		const { header, icon, first, close } = this.props;
		return (
			<Motion 
				defaultStyle={{margin: 30, bottom: 0}} 
				style={{
					margin: spring(display ? 0 : 20, {damping: 10, stiffness: 600, precision: 1}), 
					bottom: spring(display ? 10 : 0, {damping: 23})}}>
				{styles =>
					<Collapseble style={{
						padding: '15px 0px',
						margin: `${styles.bottom}px ${styles.margin}px ${styles.bottom}px ${styles.margin}px`,
						borderBottom: '1px solid rgba(0,0,0,0)'
						}} onClick={this.mouseEventClick}>
						   	<Header><Icon 
						   				style={{float: `${first ? '' : 'left'}`}}
						   				src={icon ? icon : 'icon'}/>
						   				<Title>{header}</Title>
						   	</Header>
							{display && <Content>{this.props.children}</Content>}
					</Collapseble>
				}
			</Motion>
			);
	}
}

const Icon = styled.img`
	width: 23px;
	height: 23px;
	margin: 0 17px 0 17px;
	display: inline;
`;

const Title = styled.h4`
	display: inline;
	letter-spacing: 1px;
	font-weight: 500!important;
	user-select: none;
`;
						// backgroundColor: '#546e7a'

const Collapseble = styled.li`
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	user-select: none;
	background-color: rgba(0,80,40,0.4);
	border: 1px solid rgba(0,0,0,0);
	border-radius: 2px;
	cursor: pointer;
	box-shadow: 0 2px 0px 0 rgba(0,0,0,0.1), 0 2px 0px 0 rgba(0,0,0,0.1);
`;
const Header = styled.a`
	width: 100px;
`;
const Content = styled.div`
	height: 100%;
	background-color: rgba(255,255,255,1);
	margin-top: 15px;
`;