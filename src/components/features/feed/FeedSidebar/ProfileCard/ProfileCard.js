import { ReactComponent as LogoIcon } from '../../../../../assets/icons/gold-logo.svg';

import styles from './ProfileCard.module.css';

function ProfileCard() {
	return (
		<div className={styles.profileCard}>
			<img src="/images/bg.jpg" alt="background" />
			<div className={styles.user}>
				<img src="/images/profilepict.jpg" alt="profile picture" />
				<div className={styles.userName}>
					<h3>Dmitry Kargaev</h3>
					<LogoIcon />
				</div>
				<p className={styles.profileDescription}>
					Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open
					to offers.
				</p>
			</div>
		</div>
	);
}

export default ProfileCard;
