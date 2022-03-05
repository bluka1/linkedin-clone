import Card from '../../../../core/Card/Card';
import GroupCard from '../../../../core/GroupCard/GroupCard';

import styles from './TrackedJobs.module.css';

function TrackedJobs() {
	return (
		<Card cardHeader="Tracked jobs" background="secondary">
			<div className={styles.trackedJobs}>
				<GroupCard imageSrc="/images/upwork.jpg" title="UX/UI Designer" subtitle="Upwork" />
				<GroupCard imageSrc="/images/facebook.jpg" title="Product designer" subtitle="Facebook" />
			</div>
		</Card>
	);
}

export default TrackedJobs;
