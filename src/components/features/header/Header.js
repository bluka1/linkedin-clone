import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuItem from './MenuItem/MenuItem';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import { ReactComponent as rssIcon } from '../../../assets/icons/rss.svg';
import { ReactComponent as usersIcon } from '../../../assets/icons/users.svg';
import { ReactComponent as briefcaseIcon } from '../../../assets/icons/briefcase.svg';
import { ReactComponent as msgIcon } from '../../../assets/icons/msg.svg';
import { ReactComponent as bellIcon } from '../../../assets/icons/bell.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as moreIcon } from '../../../assets/icons/more.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/blue-logo.svg';
import styles from './Header.module.css';
import OtherModal from '../other/OtherModal';
import SearchModal from './SearchModal/SearchModal';

function Header() {
	const [shown, setShown] = useState(false);
	const [searchShown, setSearchShown] = useState(false);

	const modalHandler = () => {
		setShown((prevState) => !prevState);
	};

	const searchHandler = () => {
		setSearchShown((prevState) => !prevState);
	};
	return (
		<div className={styles.header}>
			<div className={styles.headerContent}>
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
					<div className={styles.search} onClick={searchHandler}>
						<SearchIcon />
						<input type="text" readOnly={true} placeholder="Search" data-toggle="modal" data-target="#searchModal" />
					</div>
					{searchShown && <SearchModal id="searchModal" onClick={searchHandler} />}
					<div className={styles['headerRight-profile']}>
						<NavLink to="/profile">
							<ProfileInfo />
						</NavLink>
					</div>
					<div className={styles.otherItem} onClick={modalHandler}>
						<MenuItem Icon={moreIcon} text="other" />
					</div>
					{shown && <OtherModal hideModal={modalHandler} />}
				</div>
			</div>
		</div>
	);
}

export default Header;
