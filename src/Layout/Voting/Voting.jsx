import React, { useState, useEffect } from 'react';
import Input from '../../components/Input/Input';
import { Link } from "react-router-dom";
import '../Voting/Voting.css'

const Voting = () => {


	const API = '3b937f44-90cd-4180-8a25-aced6a07e5fc';
	const [catUrl, setcatUrl] = useState('https://cdn2.thecatapi.com/images/429.jpg');
	const [catID, setcatID] = useState('');
	const [allCats, setAllCats] = useState([])

	useEffect(() => {
		getApi()
	}, [])

	async function getApi() {
		const response = await fetch('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: "full" } })
		const data = await response.json();
		const catUrl = data[0].url
		const catID = data[0].id
		setcatUrl(catUrl)
		setcatID(catID)
		getVotes()
	}



	async function voteUp() {
		let body = {
			image_id: `${catUrl}`,
			sub_id: `${catID}`,
			value: 1
		}
		const rawResponse = await fetch('https://api.thecatapi.com/v1/votes', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'x-api-key': `${API}`
			},
			body: JSON.stringify(body)
		});
		const content = await rawResponse.json();
		await getApi();
		await getVotes()
	}

	async function voteDown() {
		let body = {
			image_id: catUrl,
			sub_id: catID,
			value: 0
		}


		const rawResponse = await fetch('https://api.thecatapi.com/v1/votes', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'x-api-key': `${API}`
			},
			body: JSON.stringify(body)
		});

		const content = await rawResponse.json();
		await getApi();
		await getVotes()
	}

	async function voteLike() {
		let body = {
			image_id: catUrl,
			sub_id: catID,
			value: 3
		}
		const rawResponse = await fetch('https://api.thecatapi.com/v1/votes', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'x-api-key': `${API}`
			},
			body: JSON.stringify(body)
		});
		const content = await rawResponse.json();
		
		await getApi();
		await getVotes()
	}


	async function getVotes() {
		let response = await fetch('https://api.thecatapi.com/v1/votes', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${API}`,
				'x-api-key': `${API}`

			}
		})
		const content = await response.json();
		setAllCats([...content].reverse());
		
	}


	function renderState(element) {
		if (element === 0) {
			return 'Dislikes'
		} else if (element === 1) {
			return 'Likes'
		} else {
			return 'Fav'
		}

	}
	function renderIcone(element) {
		if (element === 0) {
			return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FFD280" />
			</svg>
		} else if (element === 1) {
			return <svg fill="none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#97EAB9" />
			</svg>
		} else {
			return <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FF868E" />
			</svg>
		}

	}


	return (
		<div className='voting'>
			<Input />
			<div className="voting__info">
				<div className="main__btns">
					<Link to={{ pathname: "/" }} className='arrow__btn'><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.709994 10.9901L9.30969 19.5896C9.85669 20.1369 10.7437 20.1369 11.2905 19.5896C11.8373 19.0427 11.8373 18.1558 11.2905 17.6091L3.68104 9.99988L11.2902 2.39096C11.8371 1.84391 11.8371 0.957107 11.2902 0.410284C10.7434 -0.136761 9.85649 -0.136761 9.30949 0.410284L0.709774 9.00985C0.436354 9.28339 0.299805 9.64153 0.299805 9.99983C0.299805 10.3583 0.436624 10.7167 0.709994 10.9901Z" fill="#FF868E" />
					</svg></Link>
					<button className='voting__btn'>Voting</button>
				</div>
				<img style={{
					display: 'block', margin: '0 auto', borderRadius: '20px', width: '640px',
					height: '360px'
				}} src={catUrl} alt="" />

				<div className="choose__items">
					<div onClick={voteUp} className="choose__item smile">
						<svg fill="none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FFFFFF" />
						</svg>
					</div>
					<div onClick={voteLike} className="choose__item like">
						<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FFFFFF" />
						</svg>
					</div>
					<div onClick={voteDown} className="choose__item bored">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FFFFFF" />
						</svg>
					</div>
				</div>
				<div className="show__panels">
					<div className="show">
						<div className="show__panel">
							{allCats.map((element) =>
								<div key={element.id}>
									<span className='time'>{new Date(element.created_at).toLocaleTimeString()}</span>
									<h3>Image ID: {element.sub_id} was added to {renderState(element.value)} {renderIcone(element.value)}</h3></div>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Voting;