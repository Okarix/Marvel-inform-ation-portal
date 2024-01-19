import { NavLink } from 'react-router-dom';
import './singleCharPage.scss';

function SingleCharPage({ data }) {
	const { title, description, thumbnail } = data;

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
				</div>
				<NavLink
					to='/'
					className='single-comics__back'
				>
					Back to all
				</NavLink>
			</div>
		</>
	);
}

export default SingleCharPage;
