import { Link } from 'react-router-dom';

import PrototypingIcon from '../../../../img/ux-proto.jpg';
import AdobexdIcon from '../../../../img/adobexd.jpg';
import StylesIcon from '../../../../img/ux-styles.jpg';
import PlayIcon from '../../../../img/play.svg';

import CourseCard from '../CourseCard/CourseCard';
import Card from '../../../core/Card/Card';
import styles from './CourseRecommendations.module.css';

function CourseRecommendations() {
	return (
		<Card cardHeader="YOU MAY LIKE THESE COURSES" background="secondary">
			<div className={styles.courses}>
				<CourseCard
					image={PlayIcon}
					source={PrototypingIcon}
					title="UX Foundations: Prototyping"
					viewers={27959}
					course={true}
				/>
				<CourseCard
					image={PlayIcon}
					source={AdobexdIcon}
					title="Designing with Adobe XD and professional tools"
					viewers={9122}
					course={true}
				/>
				<CourseCard
					image={PlayIcon}
					source={StylesIcon}
					title="UX Foundations: Styles and GUIs"
					viewers={13858}
					course={true}
				/>
			</div>
			<Link to="/notimplemented">SEE ALL RECOMMENDATIONS</Link>
		</Card>
	);
}

export default CourseRecommendations;
