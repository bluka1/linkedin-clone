import { NavLink, Outlet } from 'react-router-dom';
import styles from './NetworkMain.module.css';

function NetworkMain() {
	return (
		<div className={styles.networkMain}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbar}>
					<NavLink to="received" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
						received
					</NavLink>
					<NavLink to="sent" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
						sent
					</NavLink>
				</div>
				<div className={styles.background}></div>
				<Outlet />
			</div>
		</div>
	);
}

export default NetworkMain;
