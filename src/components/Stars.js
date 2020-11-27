import React from 'react';
import styled from 'styled-components/native';

import Starfull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
	flex-direction: row;
`;

const StarView = styled.View``;

export default ({ stars, showNumber }) => {
	let s = [0, 0, 0, 0, 0];


	return (
		<StarArea>
			{s.map((i, k)=>(
				<StarView key={k}>
					{i === 0 && <StarEmpty width="18" height="18" fill="#FF9200"/>}
					{i === 1 && <StarHalf width="18" height="18" fill="#FF9200"/>}
					{i === 2 && <StarFull width="18" height="18" fill="#FF9200"/>}
				</StarView>
				))}
		</StarArea>
	);
}