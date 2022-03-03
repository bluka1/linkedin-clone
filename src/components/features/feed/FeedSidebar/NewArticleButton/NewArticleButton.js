import Button from '../../../../core/Button/Button';

import styles from './NewArticleButton.module.css';

function NewArticleButton() {
	return (
		<div className={styles.newArticleButton}>
			<button>Write new article</button>
		</div>
	);
}

export default NewArticleButton;
