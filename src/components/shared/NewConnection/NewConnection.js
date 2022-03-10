import Button from '../../core/Button/Button';
import styles from './NewConnection.module.css';

function NewConnection(props) {
	return (
		<div className={styles.newConnection}>
			{props.children}
			{props.big && (
				<>
					<div className={styles.newConnectionMessage}>{props.message && <p>{props.message}</p>}</div>
					<div className={styles.newConnectionButtons}>
						<Button text="Accept" variant="filled" />
						<Button text="Decline" variant="outlinedBlack" />
					</div>
				</>
			)}
		</div>
	);
}

export default NewConnection;
