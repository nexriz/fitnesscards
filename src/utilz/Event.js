import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

export default class DOMevent extends React.Component {
  state = {
  	id: Math.random().toString(36).substring(2) + '-event'
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  	this.element = document.getElementById(this.state.id);
  	if(this.props.events) this.addEvents(this.props.events);
  }
  componentWillUnmount() {
  	this.removeEvents(this.props.events);
  }
  addEvents(arr) {
  	for (let i of arr) {
  		this.element.addEventListener(i.event, i.func, false)
  	}
  }
  removeEvents(arr) {
  	for (let i of arr) {
  		this.element.removeEventListener(i.event, i.func, false)
  	}
  }
  render() {
  	const elProps = {
  		id: this.state.id,
  		style: {
  			transition: 'all 0.3s'
  		}
  	}
    return (
      <span>{React.cloneElement(React.Children.only(this.props.children), elProps)}</span>
    );
  }
}

DOMevent.propTypes = {
	events: PropTypes.array,
}
