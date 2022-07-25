import React from 'react';
import { Link } from "react-router-dom";
import '../Card/Card.css'
const Card = ({ text }) => {

	return (
		<div className='Card'>
		<div className='titleCard' style={{
			backgroundColor: text.color}}>
			<img src={text.img} alt="" />
		</div>
			<Link to={text.to} style={{textAlign:'center'}} className='buttonVote'>{text.name}</Link>
		</div>
	);
};

export default Card;