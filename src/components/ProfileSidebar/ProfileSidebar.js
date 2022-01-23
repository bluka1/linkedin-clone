import CourseRecommendations from '../CourseRecommendations/CourseRecommendations';
import Dashboard from '../Dashboard/Dashboard';
import Visitors from '../Visitors/Visitors';

import styles from './ProfileSidebar.module.css';

function ProfileSidebar() {
	return (
		<div className={styles.profileSidebar}>
			<Dashboard />
			<Visitors />
			<CourseRecommendations />
		</div>
	);
}

export default ProfileSidebar;
