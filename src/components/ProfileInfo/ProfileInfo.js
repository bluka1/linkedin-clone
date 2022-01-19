import { Avatar } from '@material-ui/core';

import { ReactComponent as ArrowIcon } from '../../img/arrow.svg';
import styles from './ProfileInfo.module.css';

function ProfileInfo() {
	return (
		<div className={styles.profile}>
			<Avatar />
			<div className={styles.profileInformation}>
				<div>
					<span className={styles.profileName}>Luka Batarelo</span>
					<span className={styles.profileDescription}>&emsp;you</span>
				</div>
				<div className={styles.profileViewsAndGrowth}>
					<span className={styles.profileViews}>367 views today </span>
					<span className={styles.profileGrowth}>
						&ensp;+32&nbsp;
						<ArrowIcon />
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;
