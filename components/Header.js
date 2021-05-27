import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<img src='logo.svg' alt={'Kasa logo'}></img>
			<nav>
				<Link href='/'>
					<a>Accueil</a>
				</Link>
				<Link href='/about'>
					<a>A propos</a>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
