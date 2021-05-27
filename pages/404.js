import Link from 'next/link';

const custom404 = () => {
	return (
		<main>
			<p>404</p>
			<p>Oups ! La page que vous demandez n'existe pas.</p>
			<Link href='/'>
				<a>Retourner sur la page d’accueil</a>
			</Link>
		</main>
	);
};

export default custom404;
