import React, { Component } from 'react';
import image from '../assets/about-banner-image.jpg';

import Collapse from '../components/Collapse';
import ImageBanner from '../components/ImageBanner';

class AboutPage extends Component {
	render() {
		const collapseContent = [
			{
				title: 'Fiabilité',
				content:
					'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
			},
			{
				title: 'Respect',
				content:
					'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
			},
			{
				title: 'Service',
				content:
					"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
			},
			{
				title: 'Sécurité',
				content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
			},
		];

		return (
			<main>
				<ImageBanner
					image={image}
					alt={'Kluane National Park and Reserve of Canada, Canada'}
				/>
				{collapseContent.map((el) => {
					return (
						<Collapse
							key={el.title}
							title={el.title}
							content={el.content}
						/>
					);
				})}
			</main>
		);
	}
}

export default AboutPage;
