import styles from './GroupCard.module.css';

function GroupCard({ subtitle, imageSrc, title, Icon }) {
	return (
		<div className={subtitle ? styles.groupCardSubtitle : styles.groupCardTitle}>
			<img src={imageSrc} alt="group icon" />

			{subtitle ? (
				<>
					<div className={styles.groupCardInfo}>
						<h5>{title}</h5>
						<p>{subtitle}</p>
					</div>
					{Icon && (
						<div className={styles.articleIcon}>
							<Icon />
						</div>
					)}
				</>
			) : (
				<h5>{title}</h5>
			)}
		</div>
	);
}

export default GroupCard;
