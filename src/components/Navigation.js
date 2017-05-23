import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default ({header, location}) => {
    return (
        <Navbar>
          <Header>
            {LocationHeader(location.pathname)} {location.pathname === '/kort' ? <Link to="/kort/23"> | Länk 23</Link> : null}
          </Header>
        </Navbar>
    );
}

function LocationHeader(locations) {
      if(locations === "/") return 'Hem' 
      let temp = locations.substring(1)
      let checktemp = temp.indexOf('/')
      if(checktemp !== -1)
        return temp.charAt(0).toUpperCase() + temp.slice(1).replace('/', ' - ')
      else
        return temp.charAt(0).toUpperCase() + temp.slice(1)
}

const Header = styled.h4`
  font-size: 24px;
  color: white;
  text-align: center;
`;

const Navbar = styled.header`
	width: 100%;
	height: 60px;
	background-color: #111111;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	z-index: 100;
	position: fixed;
	transition: height 0.2s linear;
	overflow: hidden;
  top: 0;
`
