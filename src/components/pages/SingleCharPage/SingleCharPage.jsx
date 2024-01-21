import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import './singleCharPage.scss';

function SingleCharPage({ data }) {
	const { name, description, thumbnail } = data;

	return (
		<div className='single-comics'>
			<Helmet>
				<meta
					name='description'
					content={`${name} page`}
				/>
				<title>{name}</title>
			</Helmet>
			<img
				src={thumbnail}
				alt={name}
				className='single-comics__img'
			/>
			<div className='single-comics__info'>
				<h2 className='single-comics__name'>{name}</h2>
				<p className='single-comics__descr'>{description}</p>
			</div>
			<NavLink
				to='/'
				className='single-comics__back'
			>
				Back to all
			</NavLink>
		</div>
	);
}

export default SingleCharPage;
