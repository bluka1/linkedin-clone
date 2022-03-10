import Card from '../../../../core/Card/Card';
import SearchCard from './SearchCard/SearchCard';

import styles from './MySearches.module.css';

function MySearches(props) {
	const searches = [
		{ title: 'UX/UI designer', location: 'Remote', applicants: 240 },
		{ title: 'Web designer', location: 'Los-Angeles' },
		{ title: 'Graphic designer', location: 'Malaysia, Kuala Lumpur' },
	];
	return (
		<Card cardHeader="My searches" background="secondary" headerLink="edit list">
			<div className={styles.mySearches}>
				{searches.map((search) => {
					if (search.applicants) {
						return (
							<SearchCard
								title={search.title}
								location={search.location}
								applicants={search.applicants}
								key={`${search.title} ${search.location}`}
							/>
						);
					} else {
						return (
							<SearchCard title={search.title} location={search.location} key={`${search.title} ${search.location}`} />
						);
					}
				})}
			</div>
		</Card>
	);
}

export default MySearches;
