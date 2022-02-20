import { NavLink } from 'react-router-dom';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import styles from './NetworkMain.module.css';

function NetworkMain() {
	return (
		<div className={styles.networkMain}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbar}>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							location.pathname === '/profile' && isActive ? styles.active : styles.inactive
						}
					>
						received
					</NavLink>
					<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
						sent
					</NavLink>
				</div>
				<div className={styles.background}></div>
				<SectionSeparator>
					<span>
						You have <a>2 new connections</a>
					</span>
				</SectionSeparator>
			</div>
		</div>
	);
}

export default NetworkMain;
