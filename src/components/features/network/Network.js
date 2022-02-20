import styles from './Network.module.css';
import NetworkMain from './NetworkMain/NetworkMain';
import NetworkNavbar from './NetworkNavbar/NetworkNavbar';

function Network() {
	return (
		<div className={styles.network}>
			<NetworkNavbar />
			<NetworkMain />
		</div>
	);
}

export default Network;
