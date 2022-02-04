import Card from '../../core/Card/Card';

import styles from './DashboardStats.module.css';

function DashboardStats() {
	return (
		<Card cardHeader="your dashboard" headerLink="GO TO STATS" background="primary">
			<div className={styles.dashboard}>
				<div>
					<p className={styles.statsNumber}>367</p>
					<p>views today</p>
				</div>
				<div>
					<p className={styles.statsNumber}>15</p>
					<p>posts views</p>
				</div>
				<div>
					<p className={styles.statsNumber}>9</p>
					<p>search appearances</p>
				</div>
			</div>
		</Card>
	);
}

export default DashboardStats;
