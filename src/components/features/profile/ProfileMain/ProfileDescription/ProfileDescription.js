import Button from '../../../../core/Button/Button';
import Avatar from '../../../../core/Avatar/Avatar';
import IconButton from '../../../../core/IconButton/IconButton';

import { ReactComponent as LogoIcon } from '../../../../../assets/icons/gold-logo.svg';
import { ReactComponent as NavigationIcon } from '../../../../../assets/icons/navigation.svg';
import { ReactComponent as EditIcon } from '../../../../../assets/icons/edit.svg';
import more from '../../../../../assets/icons/more-horizontal.svg';
import upload from '../../../../../assets/icons/upload.svg';

import styles from './ProfileDescription.module.css';

function ProfileDescription() {
	return (
		<div className={styles.profileDescription}>
			<div className={styles.profileBg}>
				<div className={styles.icons}>
					<IconButton imageSrc={upload} />
					<div className={styles.iconsRight}>
						<button className={styles.edit}>
							<EditIcon />
							EDIT PROFILE
						</button>
						<div className={styles.more}>
							<IconButton imageSrc={more} />
						</div>
					</div>
				</div>
				<img src="images/profilebg.jpg" alt="profile background" />
			</div>
			<div className={styles.profileDetails}>
				<div className={styles.avatar}>
					<Avatar imageSrc="images/profilepict.jpg" size="xxxl" />
				</div>
				<div className={styles.details}>
					<div className={styles.personalInfo}>
						<div className={styles.name}>
							<h5>Dmitry Kargaev</h5>
							<LogoIcon />
						</div>
						<div className={styles.location}>
							<NavigationIcon />
							<p>Saint Petersburg, Russian Federation</p>
						</div>
					</div>
					<p className={styles.aboutProfile}>
						Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects.
						Open to offers.
					</p>
					<div className={styles.buttons}>
						<Button text="contact info" variant="filled" />
						<Button text="1,043 connections" variant="outlined" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileDescription;
