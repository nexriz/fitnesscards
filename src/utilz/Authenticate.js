import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Prompt } from 'react-router-dom';

const mapStateToProps = (state) => ({isAuth: state.user.isAuth})

export default function(ComposedComponent) {
    @connect(mapStateToProps)
    class Authenticate extends PureComponent {
        render() {
            if(this.props.isAuth)
                return <ComposedComponent {...this.props}/>
            else
                return (
                <div>
                   <Redirect to="/"/>
                   <Prompt message="Not Authenticated"/>
                </div>
                );
        }
    }
    return Authenticate;
}

