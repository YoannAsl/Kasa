import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Apartment } from './pages/Apartment';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './assets/data.json';

class App extends React.Component {
	state = { apartments: [] };

	componentDidMount() {
		this.setState({ apartments: data });
	}

	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path='/' exact>
							<Home apartments={this.state.apartments} />
						</Route>
						<Route path='/about' component={About} />
						<Route
							path='/apartments/:id'
							render={(routeProps) => (
								<Apartment
									{...routeProps}
									apartment={this.state.apartments.filter(
										(apt) => {
											// eslint-disable-next-line no-unused-expressions
											return (
												apt.id ===
												routeProps.match.params.id
											);
										}
									)}
								/>
							)}
						/>
					</Switch>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
