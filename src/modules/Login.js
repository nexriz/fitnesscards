import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setUser } from '../components/redux/actions/userActions';
import { Row, Input, Button } from 'react-materialize'

@connect((state) => ({isAuth: state.user.isAuth}), {setUser})
class LoginPage extends React.Component {
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
      		<LoginForm onSubmit={this.onSubmit}>
            <Row>
              <Input s={6} label="Förnamn" />
              <Input s={6} label="Efternamn" />

              <Input type="password" label="lösenord" s={12} />
              <Input type="email" label="e-post" s={12} />
            </Row>
              <Button style={{backgroundColor: '#EA454B'}} waves='light'>Logga in</Button>
          </LoginForm>
    	</Container>
    );
  }
}

export default LoginPage

const Container = styled.section`
  margin: auto;
  max-width: 600px;
  padding: 20px;
  align-items: center;
  margin-top: 50px;
  border-radius: 2px;
`;

const LoginForm = styled.form`
  overflow: scroll;
`;