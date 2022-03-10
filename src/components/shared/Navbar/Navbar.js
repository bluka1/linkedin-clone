import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar(props) {
	return (
		<div className={styles.navbar}>
			{props.navlinks.map((navlink) => (
				<NavLink
					to={navlink.linkTo}
					key={navlink.linkTo}
					className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
				>
					<div className={styles.navlink}>
						<div className={styles.name}>
							{navlink.icon}
							<span>{navlink.title}</span>
						</div>
						{navlink.number && <span>{navlink.number}</span>}
					</div>
				</NavLink>
			))}
		</div>
	);
}

export default Navbar;
