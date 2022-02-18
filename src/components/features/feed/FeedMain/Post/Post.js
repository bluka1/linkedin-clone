import styles from './Post.module.css';

function Post(props) {
	return <div className={styles.post}>{props.children}</div>;
}

export default Post;
