import DashboardStats from '../../../shared/DashboardStats/DashboardStats';

import styles from './NoticesSidebar.module.css';

function NoticesSidebar() {
	return (
		<div className={styles.noticesSidebar}>
			<DashboardStats />
		</div>
	);
}

export default NoticesSidebar;
