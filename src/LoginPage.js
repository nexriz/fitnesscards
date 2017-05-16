import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {setUser} from './components/redux/actions/userActions';
import Navigation from './components/Navigation';
@connect((state) => ({isAuth: state.user.isAuth}), {setUser})
export default class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }
  onChange = (e) => {
  	const { name, value } = e.target;
  	this.setState({[name]: value})
  }
  onSubmit = (e) => {
  	e.preventDefault();
  	this.props.setUser(this.state);
  }
  render() {
    return (
    	<Container>
        <Navigation header="Logga in"/>
      		<LoginForm onSubmit={this.onSubmit}>
      			<div style={{margin: 'auto'}}>
            <p>Logga in med admin admin</p>
  	    			<label>Name</label><br/>
  	    			<input name="username" onChange={this.onChange} type="text"/><br/>
  	    			<label>Pass</label><br/>
  	    			<input name="password" onChange={this.onChange} type="password"/><br/>
  	    			<button>login</button>
      			</div>
      		</LoginForm>
    	</Container>
    );
  }
}


const Container = styled.section`
	margin: auto;
`;

const LoginForm = styled.form`
	width: 300px;
	background-color: rgba(0,0,0,0.3);
	display: flex;
  padding: 20px;
	align-items: center;
  margin: auto;
  margin-top: 100px;
`;