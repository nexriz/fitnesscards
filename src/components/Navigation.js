import React from 'react';
import styled from 'styled-components';

export default ({header}) => {
    return (
        <Navbar>
          <Header>
            {header}
          </Header>
        </Navbar>
    );
}

const Header = styled.h3`
  color: white;
  text-align: center;
`;

const Navbar = styled.header`
	width: 100%;
	height: 60px;
	background-color: #111111;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	z-index: 5;
	position: fixed;
	transition: height 0.2s linear;
	overflow: hidden;
  top: 0;
`
