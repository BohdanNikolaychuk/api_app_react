import React from 'react';
import '../Input/Input.css'
const Input = () => {
	return (
		<div>
			<div className="input">
				<form action="#">
  				<input className='inputText' type="search" placeholder="Search for breeds by name" />
 				 <button className='btn' type="submit"><img src="search.svg" alt="" /></button>
					</form>
				<div className="buttons">
					<button>
						<img src="smile.svg" alt="" />
					</button>
					<button>
						<img src="like.svg" alt="" />
					</button>
					<button>
						<img src="bored.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Input;