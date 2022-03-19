import styles from './NewPost.module.css';

function NewPost(props) {
	return (
		<div className={styles.newPost}>
			<h5>{props.title}</h5>
			<div className={styles.newPostBody}>
				<textarea type="text" placeholder={props.placeholder} />
				<div className={styles.icons}>
					{props.icons.map((Icon) => {
						return <Icon key={Date.now() - Math.random()} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default NewPost;
