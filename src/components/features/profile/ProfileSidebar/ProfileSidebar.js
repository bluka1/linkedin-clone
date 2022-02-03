import CourseRecommendations from './CourseRecommendations/CourseRecommendations';
import DashboardStats from '../../../shared/DashboardStats/DashboardStats';
import Visitors from '../../../shared/Visitors/Visitors';

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
