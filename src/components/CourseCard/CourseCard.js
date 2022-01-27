import styles from './CourseCard.module.css';

function CourseCard({ source, title, viewers }) {
	return (
		<div className={styles.courseCard}>
			<img src={source} alt="course picture" />
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.viewers}>{viewers} viewers</p>
			</div>
		</div>
	);
}

export default CourseCard;
