import AppHeader from '../appHeader/AppHeader';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainPage, ComicsPage } from '../pages';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route
							path='/'
							element={<MainPage />}
						/>
						<Route
							path='/comics'
							element={<ComicsPage />}
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
