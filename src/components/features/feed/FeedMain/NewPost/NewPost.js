import { ReactComponent as PaperclipIcon } from '../../../../../assets/icons/paperclip.svg';
import { ReactComponent as ImageIcon } from '../../../../../assets/icons/image.svg';
import { ReactComponent as FilmIcon } from '../../../../../assets/icons/film.svg';
import { ReactComponent as SendIcon } from '../../../../../assets/icons/send.svg';
import styles from './NewPost.module.css';

function NewPost() {
	return (
		<div className={styles.newPost}>
			<h5>New post</h5>
			<div className={styles.newPostBody}>
				<textarea type="text" placeholder="What’s on your mind?" />
				<div className={styles.icons}>
					<PaperclipIcon />
					<ImageIcon />
					<FilmIcon />
					<SendIcon />
				</div>
			</div>
		</div>
	);
}

export default NewPost;
