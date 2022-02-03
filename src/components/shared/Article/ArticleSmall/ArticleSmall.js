import PlayIcon from '../../../../img/play.svg';

import styles from './ArticleSmall.module.css';

function ArticleSmall({ source, title, subtitle, articleType }) {
	return (
		<div className={styles.article}>
			<div className={styles.picture}>
				{articleType === 'video' && (
					<span className={styles.hoverImg}>
						<img src={PlayIcon} alt="play icon" />
					</span>
				)}
				<img src={source} alt="course picture" />
			</div>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.viewers}>{subtitle} viewers</p>
			</div>
		</div>
	);
}

export default ArticleSmall;
