import ProfileMain from './ProfileMain/ProfileMain';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import styles from './Profile.module.css';

function Profile() {
	return (
		<div className={styles.profile}>
			<ProfileMain />
			<ProfileSidebar />
		</div>
	);
}

export default Profile;
