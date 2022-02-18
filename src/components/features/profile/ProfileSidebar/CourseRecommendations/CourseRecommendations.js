import { Link } from 'react-router-dom';

import Article from '../../../../shared/Article/Article';
import Card from '../../../../core/Card/Card';
import styles from './CourseRecommendations.module.css';

function CourseRecommendations() {
	return (
		<Card cardHeader="you may like these courses" background="secondary">
			<div className={styles.courses}>
				<Article
					imageSrc="/images/ux-proto.jpg"
					title="UX Foundations: Prototyping"
					subtitle="27959 viewers"
					size="small"
					articleType="video"
				/>
				<Article
					imageSrc="/images/adobexd.jpg"
					title="Designing with Adobe XD and professional tools"
					subtitle="9122 viewers"
					size="small"
					articleType="video"
				/>
				<Article
					imageSrc="/images/ux-styles.jpg"
					title="UX Foundations: Styles and GUIs"
					subtitle="13858 viewers"
					size="small"
					articleType="video"
				/>
			</div>
			<Link to="/notimplemented">SEE ALL RECOMMENDATIONS</Link>
		</Card>
	);
}

export default CourseRecommendations;
