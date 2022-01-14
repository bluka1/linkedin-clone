import rss from '../../img/rss.svg';
import users from '../../img/users.svg';
import briefcase from '../../img/briefcase.svg';
import msg from '../../img/msg.svg';
import bell from '../../img/bell.svg';
import search from '../../img/search.svg';
import more from '../../img/more.svg';

import styles from './Header.module.css';
import logo from '../../img/blue-logo.svg';
import MenuItem from '../MenuItem/MenuItem';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<img src={logo} alt="logo" />
				<div className={styles['headerLeft-options']}>
					<MenuItem source={rss} text="feed" />
					<MenuItem source={users} text="network" />
					<MenuItem source={briefcase} text="jobs" />
					<MenuItem source={msg} text="chat" />
					<MenuItem source={bell} text="notices" />
				</div>
			</div>
			<div className={styles.headerRight}>
				<img src={search} alt="" />
				<input />
				<ProfileInfo />
				<MenuItem source={more} text="other" />
			</div>
		</div>
	);
}

export default Header;
