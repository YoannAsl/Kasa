import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import data from '../public/data.json';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Header />
			<Component {...pageProps} apartments={data} />
			<Footer />
		</>
	);
};

export default App;
