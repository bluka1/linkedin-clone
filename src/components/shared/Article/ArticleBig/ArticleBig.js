import styles from './ArticleBig.module.css';

function ArticleBig({ source, title, subtitle }) {
	return (
		<div className={styles.articleBig}>
			<img src={source} alt="project or article picture" />
			<h5>{title}</h5>
			<p>{subtitle}</p>
		</div>
	);
}

export default ArticleBig;
