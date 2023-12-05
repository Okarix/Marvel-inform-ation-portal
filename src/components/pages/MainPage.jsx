import { useState } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import decoration from '../../assets/img/vision.png';

function MainPage() {
	const [selectedChar, setSelectedChar] = useState(null);

	const onCharSelected = id => {
		setSelectedChar(id);
	};
	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<ErrorBoundary>
					<CharInfo charId={selectedChar} />
				</ErrorBoundary>
			</div>
			<img
				src={decoration}
				alt='vision'
				className='bg-decoration'
			/>
		</>
	);
}

export default MainPage;
