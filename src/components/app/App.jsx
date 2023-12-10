import AppHeader from '../appHeader/AppHeader';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage, ComicsPage, NoMatch } from '../pages';

const App = () => {
	const location = useLocation();
	const knownPaths = ['/', '/comics'];

	return (
		<div className='app'>
			{knownPaths.includes(location.pathname) && <AppHeader />}
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
						path='*'
						element={<NoMatch />}
					/>
				</Routes>
			</main>
		</div>
	);
};

export default App;
