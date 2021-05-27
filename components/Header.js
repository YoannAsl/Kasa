import NavLink from './NavLink';

const Header = () => {
	return (
		<header className='flex justify-between my-5 mx-[5%] sm:my-10'>
			<img src='logo.svg' alt='Kasa logo'></img>
			<nav className='flex self-center justify-between'>
				<NavLink href='/' activeClassName='active'>
					<a className='navlink'>Accueil</a>
				</NavLink>
				<NavLink href='/about' activeClassName='active'>
					<a className='ml-3 navlink'>A propos</a>
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
