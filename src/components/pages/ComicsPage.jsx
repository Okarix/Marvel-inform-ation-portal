import { Helmet } from 'react-helmet';
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

function ComicsPage() {
	return (
		<>
			<Helmet>
				<meta
					name='description'
					content='Page with comics list'
				/>
				<title>Comics Page</title>
			</Helmet>
			<AppBanner />
			<ComicsList />
		</>
	);
}

export default ComicsPage;
