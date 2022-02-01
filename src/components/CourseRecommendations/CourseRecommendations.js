import { Link } from 'react-router-dom';

import PrototypingIcon from '../../img/ux-proto.jpg';
import AdobexdIcon from '../../img/adobexd.jpg';
import StylesIcon from '../../img/ux-styles.jpg';

import Card from '../Card/Card';
import CourseCard from '../CourseCard/CourseCard';
import styles from './CourseRecommendations.module.css';

function CourseRecommendations() {
	return (
		<Card cardHeader="YOU MAY LIKE THESE COURSES" background="whiteSecondary">
			<div className={styles.courses}>
				<CourseCard source={PrototypingIcon} title="UX Foundations: Prototyping" viewers={27959} />
				<CourseCard
					source={AdobexdIcon}
					title="Designing with Adobe XD and professional tools like Photoshop"
					viewers={9122}
				/>
				<CourseCard source={StylesIcon} title="UX Foundations: Styles and GUIs" viewers={13858} />
			</div>
			<Link to="/notimplemented">SEE ALL RECOMMENDATIONS</Link>
		</Card>
	);
}

export default CourseRecommendations;
