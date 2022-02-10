import Avatar from '../../../../core/Avatar/Avatar';
import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import styles from './Education.module.css';

function Education() {
	return (
		<ProfileMainCard>
			<h3 className={styles.educationHeader}>Education</h3>
			<div className={styles.education}>
				<Avatar imageSrc="images/school.jpg" size="xl" />
				<div className={styles.educationDetails}>
					<h5>Moscow State Linguistic University</h5>
					<p className={styles.degree}>
						Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance
					</p>
					<p className={styles.period}>2013 — 2017</p>
					<p>Additional English classes and UX profile courses​.</p>
				</div>
			</div>
		</ProfileMainCard>
	);
}

export default Education;
