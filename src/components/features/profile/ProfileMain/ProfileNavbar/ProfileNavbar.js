import { NavLink, useLocation } from 'react-router-dom';

import styles from './ProfileNavbar.module.css';

function ProfileNavbar() {
	const location = useLocation();

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbar}>
				<NavLink
					to="/profile"
					className={({ isActive }) => (location.pathname === '/profile' && isActive ? styles.active : styles.inactive)}
				>
					profile
				</NavLink>
				<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					activity & interests
				</NavLink>
				<NavLink to="articles" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					articles (3)
				</NavLink>
			</div>
			<div className={styles.background}></div>
		</div>
	);
}

export default ProfileNavbar;
