import profilebg from '../../img/profilebg.jpg';
import { ReactComponent as LogoIcon } from '../../img/gold-logo.svg';
import { ReactComponent as NavigationIcon } from '../../img/navigation.svg';
import { ReactComponent as UploadIcon } from '../../img/upload.svg';
import { ReactComponent as EditIcon } from '../../img/edit.svg';
import { ReactComponent as MoreIcon } from '../../img/more-horizontal.svg';
import styles from './ProfileDescription.module.css';
import Button from '../Button/Button';

function ProfileDescription() {
	return (
		<div className={styles.profileDescription}>
			<div className={styles.profileBg}>
				<div className={styles.icons}>
					<UploadIcon />
					<div className={styles.iconsRight}>
						<div className={styles.edit}>
							<EditIcon />
							<span>EDIT PROFILE</span>
						</div>
						<MoreIcon />
					</div>
				</div>
				<img src={profilebg} alt="profile background" />
			</div>
			<div className={styles.profileDetails}>
				<img />
				<div className={styles.details}>
					<div>
						<div>
							<h5>Dmitry Kargaev</h5>
							<span>
								<LogoIcon />
							</span>
						</div>
						<div>
							<span>
								<NavigationIcon />
							</span>
							<p>Saint Petersburg, Russian Federation</p>
						</div>
					</div>
					<p>
						Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects.
						Open to offers.
					</p>
					<div>
						<Button text="CONTACT INFO" variant="filled" />
						<Button text="1,043 CONNECTIONS" variant="outlined" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileDescription;
