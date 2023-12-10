import './singleComicsPage.scss';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import { NavLink } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useParams } from 'react-router-dom';
import AppBanner from '../appBanner/AppBanner';

const SingleComicsPage = () => {
	const [comic, setComic] = useState(null);
	const { comicId } = useParams();

	const { loading, error, getComic, clearError } = useMarvelService();

	useEffect(() => {
		updateChar();
	}, [comicId]);

	const updateChar = () => {
		if (!comicId) {
			return;
		}

		clearError();

		getComic(comicId).then(onComicLoaded);
	};

	const onComicLoaded = comic => {
		setComic(comic);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

	return (
		<>
			<AppBanner />
			{errorMessage}
			{spinner}
			{content}
		</>
	);
};

const View = ({ comic }) => {
	const { title, description, thumbnail, pageCount, price, language } = comic;

	return (
		<>
			<div className='single-comics'>
				<img
					src={thumbnail}
					alt={title}
					className='single-comics__img'
				/>
				<div className='single-comics__info'>
					<h2 className='single-comics__name'>{title}</h2>
					<p className='single-comics__descr'>{description}</p>
					<p className='single-comics__descr'>{pageCount}</p>
					<p className='single-comics__descr'>Language: {language}</p>
					<div className='single-comics__price'>{price}</div>
				</div>
				<NavLink
					to='/comics'
					className='single-comics__back'
				>
					Back to all
				</NavLink>
			</div>
		</>
	);
};

export default SingleComicsPage;
