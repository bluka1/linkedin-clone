import styles from './SuggestionCard.module.css';

function SuggestionCard({ source, title, viewers, course, image }) {
	return (
		<div className={styles.courseCard}>
			<div className={styles.picture}>
				{course && (
					<span className={styles.hoverImg}>
						<img src={image} alt="card image" />
					</span>
				)}
				<img src={source} alt="course picture" />
			</div>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.viewers}>{viewers} viewers</p>
			</div>
		</div>
	);
}

export default SuggestionCard;
