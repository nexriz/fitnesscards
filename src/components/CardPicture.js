import React from 'react';
import styled from 'styled-components';


export default function CardPicture({ picture }) {
		return (
				<Picture style={{
						background: `url(${picture ? picture : 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
	 			}}/>

		)
}



const Picture = styled.div`
	height: 200px;
	max-width: 100%;
	background-size: cover!important;
	border-bottom: 1px solid rgba(0,0,0,0.5);
	border-top: 1px solid rgba(0,0,0,0.2);
	transition: filter 0.3s
`;
