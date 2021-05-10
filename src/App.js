import React from 'react';
import data from './assets/data.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ApartmentPage from './pages/ApartmentPage';
import ErrorPage from './pages/ErrorPage';

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path='/' exact>
							<HomePage apartments={data} />
						</Route>
						<Route path='/about' component={AboutPage} />
						<Route
							path='/apartments/:id'
							render={(routeProps) => (
								<ApartmentPage {...routeProps} />
							)}
						/>
						<Route component={ErrorPage} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
