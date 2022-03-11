import DashboardStats from '../../../shared/DashboardStats/DashboardStats';
import Navbar from '../../../shared/Navbar/Navbar';

import styles from './NoticesSidebar.module.css';

function NoticesSidebar() {
	const links = [
		{ linkTo: 'notifications', title: 'notifications' },
		{ linkTo: 'notificationSettings', title: 'notification settings' },
	];

	return (
		<div className={styles.noticesSidebar}>
			<Navbar navlinks={links} />
			<DashboardStats />
		</div>
	);
}

export default NoticesSidebar;
