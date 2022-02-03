import { Link } from 'react-router-dom';

import PrototypingIcon from '../../../../../img/ux-proto.jpg';
import AdobexdIcon from '../../../../../img/adobexd.jpg';
import StylesIcon from '../../../../../img/ux-styles.jpg';

import Article from '../../../../shared/Article/Article';
import Card from '../../../../core/Card/Card';
import styles from './CourseRecommendations.module.css';

function CourseRecommendations() {
	return (
		<Card cardHeader="YOU MAY LIKE THESE COURSES" background="secondary">
			<div className={styles.courses}>
				<Article
					source={PrototypingIcon}
					title="UX Foundations: Prototyping"
					subtitle={27959}
					size="small"
					articleType="video"
				/>
				<Article
					source={AdobexdIcon}
					title="Designing with Adobe XD and professional tools"
					subtitle={9122}
					size="small"
					articleType="video"
				/>
				<Article
					source={StylesIcon}
					title="UX Foundations: Styles and GUIs"
					subtitle={13858}
					size="small"
					articleType="video"
				/>
			</div>
			<Link to="/notimplemented">SEE ALL RECOMMENDATIONS</Link>
		</Card>
	);
}

export default CourseRecommendations;
