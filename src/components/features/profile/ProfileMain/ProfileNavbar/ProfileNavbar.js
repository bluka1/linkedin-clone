import { NavLink } from 'react-router-dom';

import styles from './ProfileNavbar.module.css';

function ProfileNavbar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbar}>
				<NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					profile
				</NavLink>
				<NavLink
					to="/profile/activityandinterests"
					className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
				>
					activity & interests
				</NavLink>
				<NavLink to="/profile/articles" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					articles (3)
				</NavLink>
			</div>
			<div className={styles.background}></div>
		</div>
	);
}

export default ProfileNavbar;
