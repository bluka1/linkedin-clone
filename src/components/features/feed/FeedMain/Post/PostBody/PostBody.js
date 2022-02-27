import UserInfo from '../../../../../shared/UserInfo/UserInfo';
import styles from './PostBody.module.css';

function PostBody(props) {
	return (
		<div className={styles.postBody}>
			<UserInfo imageSrc={props.imageSrc} name={props.name} description={props.description} />
			<div className={styles.postBodyChildren}>{props.children}</div>
		</div>
	);
}

export default PostBody;
