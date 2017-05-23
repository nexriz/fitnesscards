import React from 'react';
import styled from 'styled-components';
import athlete from '../svg/weightlifting.svg';
import exerc from '../svg/exercise.svg';
import legdips from '../svg/legdips.svg';
import medal from '../svg/medal.svg';
import CollItem from '../components/CollItem';


const InputEdit = (props) => {
		return <Edit type="text" {...props} />
}

const Edit = styled.input`
	border: none;
	position: absolute;
	transform: translate(0,-1px);
	font-size: inherit;
	width: 250px;
	color: inherit;
	background-color: rgba(255,255,255,0);
	&:focus {
		outline: none;
	}
	&::placeholder {
		color: rgba(255,255,255,0.7);
		font-weight: 400;
		font-size: 20px;
	}
`;
export default class CardEditor extends React.Component {
  state = {
  	color: '#3599db',
  	text: '',
  	title: ''
  }
  handleColor = (e) => {
  	this.setState({color: e.target.value})
  }
  _handleEdit = (e) => {
  	const { value, name } = e.target;
  	this.setState(() => {
  		if(name === 'title') {
  			if(value.length <= 15)
  				return {[name]: value}
  		}
  		else return {[name]: value}
  	});
  }
  render() {
  	const { color, cardPicture, infoItems, author } = this.props;
  	const { title } = this.state;
    return (
    	<CardContainer style={{ transition: 'opacity 2s', opacity: '1'}} color={this.state.color || color}>
    		<CardPicture picture={cardPicture && cardPicture}/>
    		<CardTitle title={<InputEdit name="title" placeholder="ändra.." value={title} onChange={this._handleEdit}/>}/>
    		<PictureInfoItems infoItems={infoItems}/>
			    <ContentContainer>
			   		<CollUl>
			   			<CollItem  header="Övningar" icon={athlete}>
			   			</CollItem>
			   			<CollItem header="Alternativ" icon={exerc}>
			   				<Img src="http://annicaenglund.se/wp-content/uploads/2013/12/Collage3.jpg" alt=""/>
			   			</CollItem>
			   			<CollItem header="Extra" icon={legdips}>
			   				<Img src="http://annicaenglund.se/wp-content/uploads/2013/12/Collage3.jpg" alt=""/>
			   			</CollItem>
			   		</CollUl>
			   		<input
			   			type="color"
			   			value={this.state.color}
			   			onChange={this.handleColor}/>
			    </ContentContainer>

		   <CardFooter>
		   	 <Author>Skapad av: {author ? author : 'Viktor Lott'}</Author>
		   </CardFooter>
        </CardContainer>
    );
  }
}

class CardPicture extends React.Component {
	state = {
		modal: false
	}
	mouseEventClick = () => {
		this.setState((state) => {
			this.documentBody(!state.modal)
			return {modal: !state.modal}
		})
	}
	documentBody = (modal) => {
		if(modal) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "auto";
	}
	render() {
		const { picture } = this.props;
		const { modal } = this.state;

		return (
			<div >
 				{modal 
 					?
 					<ModalContainer onClick={this.mouseEventClick}>
 						<ModalBody>
	 						<Picture 
			 					onClick={this.mouseEventClick} 
			 					style={{
	 								background: `url(${picture ? picture : 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
	 						}} />	
 						</ModalBody>
 					</ModalContainer>
 					: <Picture 
	 					onClick={this.mouseEventClick} 
	 					style={{
	 						background: `url(${picture ? picture : 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
 						}} />
 					}
			</div>
			)
	}
}

const ModalContainer = styled.div`
	marin: 0;
	padding: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,1);
	position: fixed;
	top: 0;
	left: 0;
`;
const ModalBody = styled.div`
	margin: auto;
	width: 320px;
	height: 162px;
	position: relative;
`;

const CollUl = styled.ul`
	padding: 20px 0;
	padding-left: 0;
	list-style: none;
`;

const Medal = () => <img  width="30px" height="30px" style={{position: 'absolute', right: '0', top: '0', transform: 'translate(0,-2px)'}} src={medal} alt=""/>


const CardTitle = (props) => <TitleBox><Icons className="material-icons">assessment</Icons><Title>{props.title}</Title><Medal/></TitleBox>

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
`;
const TitleBox = styled.div`
	width: inherit;
	height: 50px;
	transform: translate(0, -200px)
	position: absolute;
	background-color: rgba(0,0,0,0);
`;
// #37474f
const Picture = styled.div`
	height: 200px;
	max-width: 100%;
	background-size: cover!important;
	z-index: 3;
	transform: translate(0, 0);
	border-bottom: 1px solid rgba(0,0,0,0.2);
	border-top: 1px solid rgba(0,0,0,0.2);
`;
const CardContainer = styled.div`
	margin: auto;
	width: 320px;
	min-height: 350px;
	margin-bottom: 20px;
	margin-top: 70px;
	border-radius: 2px;
	overflow: hidden;
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;