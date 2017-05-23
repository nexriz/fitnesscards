import React from 'react';
import styled from 'styled-components';


export default class Home extends React.Component {
  render() {
    return (
      <Container>
      	<InfoCard>
      		<h3 style={{textAlign: 'center'}}>Välkommen</h3>
      		<ul style={{padding: '25px'}}>
      			<li>Träningskort - 50%</li>
      			<li>Botten Navigation - 100%</li>
      			<li>Träningskort skapare - 20%</li>
      			<li>Annat - ... inc</li>
      			<li>Total - 40%</li>
      		</ul>
      	</InfoCard>
      </Container>
    );
  }
}

const Container = styled.div`
	margin-top: 100px;
	position: fixed;
	left: 0;
	right: 0;
`;
const InfoCard = styled.div`
	margin: auto;
	width: 320px;
	min-height: 350px;
	border-radius: 2px;
	overflow: scroll;
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`
