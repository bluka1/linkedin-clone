import Avatar from '../../../core/Avatar/Avatar';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/arrow.svg';
import styles from './ProfileInfo.module.css';

function ProfileInfo() {
	return (
		<div className={styles.profile}>
			<Avatar imageSrc="/images/dmitry-a.jpg" size="s" />
			<div className={styles.profileInformation}>
				<div>
					<span className={styles.profileName}>D. Kargaev</span>
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
