import { NavLink } from 'react-router-dom';

import MenuItem from '../MenuItem/MenuItem';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

import { ReactComponent as rssIcon } from '../../img/rss.svg';
import { ReactComponent as usersIcon } from '../../img/users.svg';
import { ReactComponent as briefcaseIcon } from '../../img/briefcase.svg';
import { ReactComponent as msgIcon } from '../../img/msg.svg';
import { ReactComponent as bellIcon } from '../../img/bell.svg';
import { ReactComponent as SearchIcon } from '../../img/search.svg';
import { ReactComponent as moreIcon } from '../../img/more.svg';
import { ReactComponent as LogoIcon } from '../../img/blue-logo.svg';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<LogoIcon />
				<div className={styles['headerLeft-options']}>
					<NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
						<MenuItem Icon={rssIcon} text="feed" />
					</NavLink>
					<NavLink to="/network" className={({ isActive }) => (isActive ? styles.active : undefined)}>
						<MenuItem Icon={usersIcon} text="network" />
					</NavLink>
					<NavLink to="/jobs" className={({ isActive }) => (isActive ? styles.active : undefined)}>
						<MenuItem Icon={briefcaseIcon} text="jobs" />
					</NavLink>
					<NavLink to="/chat" className={({ isActive }) => (isActive ? styles.active : undefined)}>
						<MenuItem Icon={msgIcon} text="chat" />
					</NavLink>
					<NavLink to="/notices" className={({ isActive }) => (isActive ? styles.active : undefined)}>
						<MenuItem Icon={bellIcon} text="notices" />
					</NavLink>
				</div>
			</div>
			<div className={styles.headerRight}>
				<div className={styles.search}>
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
				<div className={styles['headerRight-profile']}>
					<ProfileInfo />
				</div>
				<div className={styles.otherItem}>
					<MenuItem Icon={moreIcon} text="other" />
				</div>
			</div>
		</div>
	);
}

export default Header;
