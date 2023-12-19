import { lazy, Suspense } from 'react';
import AppHeader from '../appHeader/AppHeader';
import { Route, Routes, useLocation } from 'react-router-dom';
import Spinner from '../spinner/Spinner.jsx';

const NoMatch = lazy(() => import('../pages/NoMatch.jsx'));
const MainPage = lazy(() => import('../pages/MainPage.jsx'));
const ComicsPage = lazy(() => import('../pages/ComicsPage.jsx'));
const SingleComicsPage = lazy(() => import('../pages/SingleComicsPage.jsx'));

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
				<Suspense fallback={<Spinner />}>
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
				</Suspense>
			</main>
		</div>
	);
};

export default App;
