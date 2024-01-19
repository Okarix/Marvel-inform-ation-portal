import { NavLink } from 'react-router-dom';
import './singleComicsPage.scss';

const SingleComicsPage = ({ data }) => {
	const { title, description, thumbnail, pageCount, price, language } = data;

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
