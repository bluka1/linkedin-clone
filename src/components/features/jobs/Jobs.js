import styles from './Jobs.module.css';
import JobsMain from './JobsMain/JobsMain';
import JobsSidebar from './JobsSidebar/JobsSidebar';

function Jobs() {
	return (
		<div className={styles.jobs}>
			<JobsMain />
			<JobsSidebar />
		</div>
	);
}

export default Jobs;
