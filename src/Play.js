import React from 'react';
import { Motion, spring, StaggeredMotion } from 'react-motion';

export default class Play extends React.Component {
  state = {
  	y: 250,
  	x: 800
  }
  componentDidMount() {
  	window.addEventListener('mousemove', this.handleMouseMoves)
  }
  handleMouseMoves = ({pageX: x, pageY: y}) => {
  	this.setState({x,y});
  }
  render() {
  	const { x, y } = this.state;
    return (
      <div>
		<StaggeredMotion defaultStyles={ Array(30).fill('test').map((item, i) => ({x: x, y: y}))} 
						 styles={prev => prev.map((_, i) => {
						 	return i === 0
						 		? {x: spring(x, {stiffness: 120, damping: 14}), y: spring(y, {stiffness: 120, damping: 14})}
						 		: {x: spring(prev[i - 1].x, {stiffness: 120, damping: 14}), y: spring(prev[i - 1].y, {stiffness: 120, damping: 14})}
						 })}>
						 {style => <div>
						 	{style.map((item, i) => <div key={i} style={{position: 'absolute',zIndex: style.length - i,borderRadius: '50px', backgroundColor: `hsl(${ (i * 10) + 50},100%,50%)`, width: '100px', height: '100px', transform: `translate(${item.x - 50}px, ${item.y - 50}px)`}}></div>)}
						 </div>}
		</StaggeredMotion>
      </div>
    );
  }
}
