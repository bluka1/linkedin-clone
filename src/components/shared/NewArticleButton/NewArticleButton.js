import styles from './NewArticleButton.module.css';

function NewArticleButton(props) {
	return (
		<div className={styles.newArticleButton}>
			<button>{props.text}</button>
		</div>
	);
}

export default NewArticleButton;
