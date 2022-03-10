import styles from './ServiceButton.module.css';

function ServiceButton({ big, Icon, title, subtitle, blue, gold }) {
	if (big) {
		return (
			<div className={`${styles.serviceButtonBig} ${blue && styles.blueButton} ${gold && styles.goldButton}`}>
				{Icon && <Icon />}
				<div className={styles.serviceButtonBigContent}>
					<h5 className={styles.serviceButtonBigTitle}>{title}</h5>
					<p className={styles.serviceButtonBigSubtitle}>{subtitle}</p>
				</div>
			</div>
		);
	} else {
		return (
			<button className={styles.serviceButton}>
				<div className={styles.svgContainer}>
					<Icon />
				</div>
				<h5 className={styles.serviceButtonTitle}>{title}</h5>
			</button>
		);
	}
}

export default ServiceButton;
