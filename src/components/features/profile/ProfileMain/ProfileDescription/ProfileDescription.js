import Button from '../../../../core/Button/Button';
import Avatar from '../../../../core/Avatar/Avatar';

import profilebg from '../../../../../img/profilebg.jpg';
import { ReactComponent as LogoIcon } from '../../../../../img/gold-logo.svg';
import { ReactComponent as NavigationIcon } from '../../../../../img/navigation.svg';
import { ReactComponent as UploadIcon } from '../../../../../img/upload.svg';
import { ReactComponent as EditIcon } from '../../../../../img/edit.svg';
import { ReactComponent as MoreIcon } from '../../../../../img/more-horizontal.svg';
import Dmitry from '../../../../../img/profilepict.jpg';

import styles from './ProfileDescription.module.css';

function ProfileDescription() {
	return (
		<div className={styles.profileDescription}>
			<div className={styles.profileBg}>
				<div className={styles.icons}>
					<div className={styles.upload}>
						<UploadIcon />
					</div>
					<div className={styles.iconsRight}>
						<div className={styles.edit}>
							<EditIcon />
							EDIT PROFILE
						</div>
						<div className={styles.more}>
							<MoreIcon />
						</div>
					</div>
				</div>
				<img src={profilebg} alt="profile background" />
			</div>
			<div className={styles.profileDetails}>
				<div className={styles.avatar}>
					<Avatar imageSrc={Dmitry} size="xxxl" />
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
					<div className={styles.btns}>
						<Button text="contact info" variant="filled" />
						<Button text="1,043 connections" variant="outlined" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileDescription;
