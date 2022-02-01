import CourseRecommendations from '../CourseRecommendations/CourseRecommendations';
import DashboardStats from '../DashboardStats/DashboardStats';
import Visitors from '../Visitors/Visitors';

import styles from './ProfileSidebar.module.css';

function ProfileSidebar() {
	return (
		<div className={styles.profileSidebar}>
			<DashboardStats />
			<Visitors />
			<CourseRecommendations />
		</div>
	);
}

export default ProfileSidebar;
