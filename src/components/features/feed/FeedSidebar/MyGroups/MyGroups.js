import { Link } from 'react-router-dom';

import Card from '../../../../core/Card/Card';
import GroupCard from '../../../../core/GroupCard/GroupCard';

import styles from './MyGroups.module.css';

function MyGroups() {
	return (
		<Card cardHeader="My groups" headerLink="edit list" background="secondary">
			<div className={styles.myGroups}>
				<GroupCard imageSrc="/images/school.jpg" title="Moscow State Linguistical University" />
				<GroupCard imageSrc="/images/freelancers.jpg" title="Digital freelancers group" />
				<GroupCard imageSrc="/images/design-assoc.jpg" title="Interaction design association" />
			</div>
			<Link to="/notimplemented">SHOW ALL (8)</Link>
		</Card>
	);
}

export default MyGroups;
