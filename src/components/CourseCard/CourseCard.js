import { ReactComponent as PlayIcon } from '../../img/play.svg';

import styles from './CourseCard.module.css';

function CourseCard({ source, title, viewers }) {
	return (
		<div className={styles.courseCard}>
			<span>
				<PlayIcon />
			</span>
			<img src={source} alt="course picture" />
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.viewers}>{viewers} viewers</p>
			</div>
		</div>
	);
}

export default CourseCard;
