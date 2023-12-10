import AppHeader from '../appHeader/AppHeader';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage, ComicsPage, NoMatch } from '../pages';
import SingleComicsPage from '../pages/SingleComicsPage';

const App = () => {
	const location = useLocation();
	const knownPaths = ['/', '/comics', '/comics/:comicId'];

	return (
		<div className='app'>
			{knownPaths.some(path => {
				const regex = new RegExp(`^${path.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
				return location.pathname.match(regex);
			}) && <AppHeader />}
			<main style={{ position: 'relative' }}>
				<Routes>
					<Route
						path='/'
						element={<MainPage />}
					/>
					<Route
						path='/comics'
						element={<ComicsPage />}
					/>
					<Route
						path='/comics/:comicId'
						element={<SingleComicsPage />}
					/>
					<Route
						path='*'
						element={<NoMatch />}
					/>
				</Routes>
			</main>
		</div>
	);
};

export default App;
