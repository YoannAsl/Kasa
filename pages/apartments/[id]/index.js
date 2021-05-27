import Carousel from '../../../components/Carousel';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Tag from './../../../components/Tag';
import Host from './../../../components/Host';
import Rating from './../../../components/Rating';
import Dropdown from './../../../components/Dropdown';

const index = ({ apartments }) => {
	const router = useRouter();
	const { id } = router.query;
	useEffect(() => {
		if (id) {
			if (!apartments.some((apt) => apt.id === id)) {
				router.push('/404');
			}
		}
	}, []);

	const apartment = apartments.filter((apt) => apt.id === id);
	if (apartment[0]) {
		const {
			title,
			location,
			tags,
			host,
			rating,
			description,
			equipments,
			pictures,
		} = apartment[0];

		// console.log(title);
		return (
			<main>
				<Carousel pictures={pictures} />
				<div>
					<section className='apartment-infos'>
						<h1 className='apartment-title'>{title}</h1>
						<p className='apartment-location'>{location}</p>
						<ul className='tags'>
							{tags.map((tag) => (
								<Tag content={tag} key={tag} />
							))}
						</ul>
					</section>

					<div className={'host-infos'}>
						<Host name={host.name} picture={host.picture} />
						<Rating rating={rating} />
					</div>
				</div>
				<div className='collapse-container'>
					<Dropdown title={'Description'} content={description} />
					<Dropdown
						title={'Équipements'}
						content={equipments.map((eq) => (
							<li key={eq}>{eq}</li>
						))}
					/>
				</div>
			</main>
		);
	}
	return null;
};

export default index;
