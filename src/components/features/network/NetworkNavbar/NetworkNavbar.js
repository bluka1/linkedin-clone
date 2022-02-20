import { NavLink } from 'react-router-dom';

import { ReactComponent as LinkIcon } from '../../../../assets/icons/link.svg';
import { ReactComponent as DiscIcon } from '../../../../assets/icons/disc.svg';
import { ReactComponent as ArchiveIcon } from '../../../../assets/icons/archive.svg';
import { ReactComponent as GroupsIcon } from '../../../../assets/icons/users-s.svg';
import { ReactComponent as LayersIcon } from '../../../../assets/icons/layers.svg';
import { ReactComponent as HashIcon } from '../../../../assets/icons/hash.svg';
import styles from './NetworkNavbar.module.css';

function NetworkNavbar() {
	return (
		<div className={styles.networkNavbar}>
			<div className={styles.navbar}>
				<NavLink
					to="/profile"
					className={({ isActive }) => (location.pathname === '/profile' && isActive ? styles.active : styles.inactive)}
				>
					<div className={styles.navlink}>
						<div className={styles.name}>
							<LinkIcon />
							<span>connections</span>
						</div>
						<span>1,038</span>
					</div>
				</NavLink>
				<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					<div className={styles.navlink}>
						<div className={styles.name}>
							<DiscIcon />
							<span>invitations</span>
						</div>
						<span>1,038</span>
					</div>
				</NavLink>
				<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					<div className={styles.navlink}>
						<div className={styles.name}>
							<ArchiveIcon />
							<span>teammates</span>
						</div>
					</div>
				</NavLink>
				<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					<div className={styles.navlink}>
						<div className={styles.name}>
							<GroupsIcon />
							<span>groups</span>
						</div>
						<span>6</span>
					</div>
				</NavLink>
				<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					<div className={styles.navlink}>
						<div className={styles.name}>
							<LayersIcon />
							<span>pages</span>
						</div>
						<span>28</span>
					</div>
				</NavLink>
				<NavLink to="activity" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
					<div className={styles.navlink}>
						<div className={styles.name}>
							<HashIcon />
							<span>hashtags</span>
						</div>
						<span>8</span>
					</div>
				</NavLink>
			</div>
		</div>
	);
}

export default NetworkNavbar;
