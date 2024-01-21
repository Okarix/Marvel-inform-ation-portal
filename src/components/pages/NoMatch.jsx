import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import surprise from '../../assets/img/spiderman_on_toilet.png';

function NoMatch() {
	const [hover, setHover] = useState(false);
	const navigate = useNavigate();

	const linkStyle = {
		cursor: 'pointer',
		fontSize: '18px',
		marginTop: '10px',
		color: hover ? 'rgba(255,0,0,0.6)' : 'red',
	};

	return (
		<div style={{ position: 'absolute', top: '-70px', left: '50%', transform: 'translateX(-50%)' }}>
			<Helmet>
				<meta
					name='description'
					content='Not found page'
				/>
				<title>404</title>
			</Helmet>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
				<h2 style={{ fontSize: '70px', userSelect: 'none' }}>404</h2>
				<p style={{ fontSize: '18px', marginTop: '10px' }}>Oops, looks like you went to the wrong link</p>
				<a
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					style={linkStyle}
					onClick={() => navigate(-1)}
				>
					Return to previous page
				</a>
			</div>
			<img
				src={surprise}
				alt='surprise'
				style={{ display: 'block', margin: '0 auto', borderRadius: '4px', width: '300px', height: '400px' }}
			/>
		</div>
	);
}

export default NoMatch;
