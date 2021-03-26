import React from 'react';
import { ThumbnailsContainer } from './components/ThumbnailsContainer';
import data from './data.json';

class App extends React.Component {
	state = { apartments: [] };

	componentDidMount() {
		this.setState({ apartments: data });
	}

	render() {
		// console.log(this.state.apartments);
		return (
			<div className='App'>
				<ThumbnailsContainer apartments={this.state.apartments} />
			</div>
		);
	}
}

export default App;
