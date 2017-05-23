import React from 'react';
import PropTypes from 'prop-types';

export default class Event extends React.Component {
	state = {
		id: 'eventId-' + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(4),
		clickEvents: ['touchstart', 'click']
	}
	componentDidMount() {
		const { add, tap } = this.props;
		const { clickEvents } = this.state;
		this.element = this._getElement(this.state.id);
		if(tap) this._addEvents(this._createEvents(clickEvents, tap))
		else this._addEvents(add)
	}
	componentWillUnmount() { 
		const { add, tap } = this.props;
		const { clickEvents } = this.state;
		this.element = this._getElement(this.state.id);
		if(tap) this._removeEvents(this._createEvents(clickEvents, tap))
		else this._removeEvents(add)

	}
	_addEvents = (events) => {
		for(let event of events) this.element.addEventListener(event.type, event.func, false);
	}
	_removeEvents = (events) => {
		for(let event of events) this.element.removeEventListener(event.type, event.func, false);
	}
	_createEvents = (events, func) => {
		return events.map(item => ({type: item, func}))
	}
	_getElement = id => document.getElementById(id)
	render() {
		const { id } = this.state;
		return React.cloneElement(React.Children.only(this.props.children), { id })
  	}
}

Event.propTypes = {
	add: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			func: PropTypes.func.isRequired
		})
	),
	tap: PropTypes.func
}