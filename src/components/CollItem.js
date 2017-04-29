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
	render() {
		const { display } = this.state;
		const { header, icon, first } = this.props;
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
						borderBottom: '1px solid rgba(0,0,0,0.1)',
						backgroundColor: '#546e7a'
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
const Collapseble = styled.li`
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	user-select: none;
	cursor: pointer;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;
const Header = styled.a`
	width: 100px;
`;
const Content = styled.div`
	height: 100%;
	background-color: rgba(255,255,255,1);
	margin-top: 15px;
`;