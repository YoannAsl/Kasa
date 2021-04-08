import React from 'react';
import data from './assets/data.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Apartment } from './pages/Apartment';
import { ErrorPage } from './pages/ErrorPage';

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path='/' exact>
							<Home apartments={data} />
						</Route>
						<Route path='/about' component={About} />
						<Route
							path='/apartments/:id'
							render={(routeProps) => (
								<Apartment {...routeProps} />
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
