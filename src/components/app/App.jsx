import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner.jsx';

const NoMatch = lazy(() => import('../pages/NoMatch.jsx'));
const MainPage = lazy(() => import('../pages/MainPage.jsx'));
const ComicsPage = lazy(() => import('../pages/ComicsPage.jsx'));
const SinglePage = lazy(() => import('../pages/SinglePage.jsx'));
const SingleComicsPage = lazy(() => import('../pages/SingleComicPage/SingleComicsPage.jsx'));
const SingleCharPage = lazy(() => import('../pages/SingleCharPage/SingleCharPage.jsx'));

const App = () => {
	const location = useLocation();
	const knownPaths = ['/', '/comics', '/comics/:id', '/characters/:id'];

	return (
		<div className='app'>
			{knownPaths.some(path => {
				const regex = new RegExp(`^${path.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
				return location.pathname.match(regex);
			}) && <AppHeader />}
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					classNames='app'
					timeout={300}
				>
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
									path='/comics/:id'
									element={
										<SinglePage
											Component={SingleComicsPage}
											dataType='comic'
										/>
									}
								/>
								<Route
									path='/characters/:id'
									element={
										<SinglePage
											Component={SingleCharPage}
											dataType='character'
										/>
									}
								/>
								<Route
									path='*'
									element={<NoMatch />}
								/>
							</Routes>
						</Suspense>
					</main>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default App;
