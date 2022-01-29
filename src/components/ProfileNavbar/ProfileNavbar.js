import styles from './ProfileNavbar.module.css';

function ProfileNavbar() {
	return (
		<div className={styles.navbar}>
			<NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : undefined)}>
				<p>PROFILE</p>
			</NavLink>
			<NavLink to="/profile/activityandinterests" className={({ isActive }) => (isActive ? styles.active : undefined)}>
				<p>ACTIVITY & INTERESTS</p>
			</NavLink>
			<NavLink to="/articles" className={({ isActive }) => (isActive ? styles.active : undefined)}>
				<p>ARTICLES (3)</p>
			</NavLink>
		</div>
	);
}

export default ProfileNavbar;
