import React from 'react';
import RedStar from '../assets/svg/red-star.svg';
import GreyStar from '../assets/svg/grey-star.svg';

const RateStar = ({ scaleValue, careType }) => {
    const range = [1, 2, 3, 4, 5]
	const scaleType =
		careType === 'red' ? (
			<img src={RedStar} alt='red-star' />
		) : (
			<img src={GreyStar} alt='grey-star' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
};

export default RateStar;