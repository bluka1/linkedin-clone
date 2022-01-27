import Card from '../Card/Card';

import styles from './Dashboard.module.css';

function Dashboard() {
	return (
		<Card cardHeader="YOUR DASHBOARD" headerLink="GO TO STATS" background="var(--white-primary)">
			<div>
				<p className={styles.statsNumber}>367</p>
				<p>views today</p>
			</div>
			<div className={styles.dashboardChild}>
				<p className={styles.statsNumber}>15</p>
				<p>posts views</p>
			</div>
			<div className={styles.dashboardChild}>
				<p className={styles.statsNumber}>9</p>
				<p>search appearances</p>
			</div>
		</Card>
	);
}

export default Dashboard;
