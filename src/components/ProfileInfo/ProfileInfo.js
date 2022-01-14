import { Avatar } from '@material-ui/core';
import arrow from '../../img/arrow.svg';

import styles from './ProfileInfo.module.css';

function ProfileInfo() {
	return (
		<div className={styles.profileInfo}>
			<Avatar />
			<div>
				<div>
					<span>Luka Batarelo</span>
					<span>you</span>
				</div>
				<div>
					<span>367 views today</span>
					<span>
						+32 <img src={arrow} alt="" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;
