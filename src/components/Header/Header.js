import { NavLink } from 'react-router-dom';

import MenuItem from '../MenuItem/MenuItem';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

import rssIcon from '../../img/rss.svg';
import usersIcon from '../../img/users.svg';
import briefcaseIcon from '../../img/briefcase.svg';
import msgIcon from '../../img/msg.svg';
import bellIcon from '../../img/bell.svg';
import searchIcon from '../../img/search.svg';
import moreIcon from '../../img/more.svg';
import logoIcon from '../../img/blue-logo.svg';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<img src={logoIcon} alt="logo" />
				<div className={styles['headerLeft-options']}>
					<NavLink to="/">
						<MenuItem source={rssIcon} text="feed" />
					</NavLink>
					<NavLink to="/network">
						<MenuItem source={usersIcon} text="network" />
					</NavLink>
					<NavLink to="/jobs">
						<MenuItem source={briefcaseIcon} text="jobs" />
					</NavLink>
					<NavLink to="/chat">
						<MenuItem source={msgIcon} text="chat" />
					</NavLink>
					<NavLink to="/notices">
						<MenuItem source={bellIcon} text="notices" />
					</NavLink>
				</div>
			</div>
			<div className={styles.headerRight}>
				<div className={styles.search}>
					<img src={searchIcon} alt="Search" />
					<input type="text" placeholder="Search" />
				</div>
				<div className={styles['headerRight-profile']}>
					<ProfileInfo />
				</div>
				<div className={styles.otherItem}>
					<MenuItem source={moreIcon} text="other" />
				</div>
			</div>
		</div>
	);
}

export default Header;
