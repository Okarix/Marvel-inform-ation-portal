import { useState } from 'react';
import { Helmet } from 'react-helmet';
import decoration from '../../assets/img/vision.png';
import CharForm from '../charForm/CharForm';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';

function MainPage() {
	const [selectedChar, setSelectedChar] = useState(null);

	const onCharSelected = id => {
		setSelectedChar(id);
	};
	return (
		<>
			<Helmet>
				<meta
					name='description'
					content='Main page with characters'
				/>
				<title>Marvel Information Portal</title>
			</Helmet>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<div className='char__content-wrapper'>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharForm />
					</ErrorBoundary>
				</div>
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
