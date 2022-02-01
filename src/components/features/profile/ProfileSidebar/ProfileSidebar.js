import PrototypingIcon from '../../../../img/ux-proto.jpg';
import AdobexdIcon from '../../../../img/adobexd.jpg';
import StylesIcon from '../../../../img/ux-styles.jpg';

import CourseCard from '../../../core/SuggestionCard/SuggestionCard';
import Suggestions from '../../../core/Suggestions/Suggestions';
import DashboardStats from '../../../shared/DashboardStats/DashboardStats';
import Visitors from '../../../shared/Visitors/Visitors';

import styles from './ProfileSidebar.module.css';

function ProfileSidebar() {
	return (
		<div className={styles.profileSidebar}>
			<DashboardStats />
			<Visitors />
			<Suggestions link="SEE ALL RECOMMENDATIONS">
				<CourseCard source={PrototypingIcon} title="UX Foundations: Prototyping" viewers={27959} course={true} />
				<CourseCard
					source={AdobexdIcon}
					title="Designing with Adobe XD and professional tools"
					viewers={9122}
					course={true}
				/>
				<CourseCard source={StylesIcon} title="UX Foundations: Styles and GUIs" viewers={13858} course={true} />
			</Suggestions>
		</div>
	);
}

export default ProfileSidebar;
