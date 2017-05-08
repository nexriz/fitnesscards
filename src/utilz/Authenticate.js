import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps(state) => ({isAuth: state.auth.isAuth})

export default function(ComposedComponent) {
    @connect(mapStateToProps)
    class Authenticate extends Component {
        componentWillMount() {
            if(!this.props.isAuth) {
                
            }
        }
        componentWillUpdate(nextProps) {
            if(!nextProps.isAuth) {

            }
        }
        render() {
            return <ComposedComponent {...this.props}/>
        }
    }
    return Authenticate;
}

