import { ReactComponent as PlayIcon } from '../../../img/play.svg';

import styles from './SuggestionCard.module.css';

function SuggestionCard({ source, title, viewers, course }) {
	return (
		<div className={styles.courseCard}>
			{course && (
				<span>
					<PlayIcon />
				</span>
			)}
			<img src={source} alt="course picture" />
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.viewers}>{viewers} viewers</p>
			</div>
		</div>
	);
}

export default SuggestionCard;
