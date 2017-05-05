import React from 'react';
import styled from 'styled-components';


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
  	console.log(this.state)
  }
  render() {
    return (
    	<Container>
    		<LoginForm onSubmit={this.onSubmit}>
    			<div style={{margin: 'auto'}}>
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
	height: 800px;
`;

const LoginForm = styled.form`
	width: 400px;
	height: 300px;
	background-color: rgba(0,0,0,0.3);
	display: flex;
	align-items: center;
`;