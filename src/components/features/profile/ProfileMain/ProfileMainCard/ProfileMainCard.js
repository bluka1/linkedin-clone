import styles from './ProfileMainCard.module.css';

function ProfileMainCard(props) {
	return <div className={styles.profileMainCard}>{props.children}</div>;
}

export default ProfileMainCard;
