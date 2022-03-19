import { Outlet, useLocation, useNavigate } from 'react-router';

import NoticesSidebar from './NoticesSidebar/NoticesSidebar';

import styles from './Notices.module.css';
import { useEffect } from 'react';

function Notices() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/notices') {
			navigate('/notices/notifications');
		}
	}, [location, navigate]);
	return (
		<div className={styles.notices}>
			<NoticesSidebar />
			<Outlet />
		</div>
	);
}

export default Notices;
