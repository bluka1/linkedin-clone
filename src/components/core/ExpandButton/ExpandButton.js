import styles from './ExpandButton.module.css';

function ExpandButton(props) {
	return (
		<button className={styles.expandButton} onClick={props.onClick}>
			{props.text}
		</button>
	);
}

export default ExpandButton;
