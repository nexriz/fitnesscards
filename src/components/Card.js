import React from 'react';
import styled from 'styled-components';
import athlete from '../svg/weightlifting.svg';
import exerc from '../svg/exercise.svg';
import legdips from '../svg/legdips.svg';
import medal from '../svg/medal.svg';
import CollItem from '../components/CollItem';
import corner from '../svg/corner-handle.svg';
import ReactSwipe from 'react-swipe';
import CardPicture from './CardPicture';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import GifPlayer from 'react-gif-player';

class Swiper extends React.Component {
	next = () => {
		this.refs.reactswipe.next();
	}
	prev = () => {
		this.refs.reactswipe.prev();
	}
	render() {
  	const { title, color, picture, infoItems, author, myKey } = this.props;	
		return (
			<ReactSwipe key={myKey} ref="reactswipe" swipeOptions={{continuous: false, startSlide: 0}}>
        		<Contain>
	        		<CardPicture picture={picture && picture}/>
	        		<CardTitle title={title} onClick={this.next}/>
	        		<PictureInfoItems infoItems={infoItems}/>
	        		<Medal />
        		</Contain>
        		<Contain>
			   		<ContentContainer>
		   					<CollUl>
					   			<CollItem  header="Övningar" icon={athlete} close={close}>
					   			</CollItem>
					   			<CollItem header="Alternativ" icon={exerc} close={close}>
					   				<Img src="http://annicaenglund.se/wp-content/uploads/2013/12/Collage3.jpg" alt=""/>
					   			</CollItem>
					   			<CollItem header="Extra" icon={legdips} close={close}>
					   				<Img src="http://annicaenglund.se/wp-content/uploads/2013/12/Collage3.jpg" alt=""/>
					   			</CollItem>
					   		</CollUl>
				    </ContentContainer>
			   			<i style={{position: 'absolute', marginLeft: '30px'}} className="material-icons" onClick={this.prev}>fast_rewind</i>
				    <CardFooter>
	    		   	 <Author>Skapad av: {author ? author : 'Viktor Lott'}</Author>
	    		   </CardFooter>
        		</Contain>

        	</ReactSwipe>
		);
	}
}

 export default SortableElement(({props, myKey, style}) => {
  	const { color } = props;	
  	const marg = { marginBottom: '10px'}
    	return (
    		<li style={style}>
	        	<CardContainer style={{ transition: 'opacity 2s', opacity: '1'}} color={color}>
	        		<Swiper {...props} myKey={myKey} />
	            </CardContainer>
    		</li>
        );
})
const Contain = styled.div`
	width: 320px;
	height: 200px;
	border-radius: 2px;
	overflow: hidden;
	${props => props.shadow 
		&& `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);`}
`;


const CollUl = styled.ul`
	margin-top: 15px;
	padding: 0px 0;
	padding-left: 0;
	list-style: none;
`;

const Medal = SortableHandle(() => <HandleIcon  width="30px" height="30px" style={{position: 'absolute'}} src={corner} alt=""/>)
const HandleIcon = styled.img`
	transform: translate(290px, -33px) rotate(0deg);
`;
const CardTitle = (props) => <TitleBox><Icons className="material-icons" onClick={props.onClick}>assessment</Icons><Title>{props.title}</Title></TitleBox>

const PictureInfoItems = ({infoItems}) => infoItems
										   		? <InfoBox>{infoItems.map((item, i) => <InfoItem>{item.name}</InfoItem>)}</InfoBox>
										   		: <InfoBox>
											   		<InfoItem>Styrka</InfoItem>
											   		<InfoItem>Flexibilitet</InfoItem>
											   		<InfoItem>Koncentration</InfoItem>
										   		  </InfoBox>




const Img = styled.img`
	width: 200px;
	background-size: cover;
`

const Author = styled.a`
	font-size: 10px;
	padding-left: 10px;
	color: rgba(0,0,0,0.5);
`;

const CardFooter = styled.div`
	width: 100%;
	height: 20px;
	margin-bottom: 0;
	margin-top: 40px;
`;

const Icons = styled.i`
	color: white;
	float: left;
	margin-top: 15px;
	margin-left: 10px;
	margin-right: 10px;
 	cursor: pointer;
 	&:hover {
 		color: #EA454B;
 	}
`;

const ContentContainer = styled.div`
	margin: 10px;
	margin-top: 0px;
`;

const InfoItem = styled.div`
	height: 20px;
	width: 15px;
	background-color: rgba(15,15,15, 0.8);
	transition: width 0.5s;
	color: white;
	padding-left: 6px;
	letter-spacing: 5px;
	&:hover {
		width: 314px;
	}
	overflow: hidden;
	cursor: pointer;
	user-select: none;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	z-index: 2;
	font-size: 15px;
`;

const InfoBox = styled.div`
	height: 80px;
	width: 50px;
	position: absolute;
	transform: translate(0, -100px);
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	user-select: none;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
`
const Title = styled.h3`
	position: absolute;
	top: 12px;
	left: 45px;
	color: rgba(255,255,255,1);
	font-size: 24px;
	padding: 0;
	margin: 0;
	font-family: 'Audiowide', cursive;
	letter-spacing: 1px;
	font-weight: 200;
	cursor: pointer;
	text-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
const TitleBox = styled.div`
	width: inherit;
	height: 50px;
	transform: translate(0, -200px)
	position: absolute;
	background-color: rgba(0,0,0,0);
`;
// #37474f

const CardContainer = styled.div`
	margin: auto;
	width: 320px;
	min-height: 200px;
	border-radius: 2px;
	overflow: hidden;
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;