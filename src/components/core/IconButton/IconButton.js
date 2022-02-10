import styles from './IconButton.module.css';

function IconButton(props) {
	return (
		<button className={styles.iconButton}>
			<img src={props.imageSrc} alt="icon svg" />
		</button>
	);
}

export default IconButton;
