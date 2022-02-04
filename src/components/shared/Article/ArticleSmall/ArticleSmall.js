import PlayIcon from '../../../../img/play.svg';

import styles from './ArticleSmall.module.css';

function ArticleSmall({ imageSrc, title, subtitle, articleType }) {
	return (
		<div className={styles.article}>
			<div className={styles.picture}>
				{articleType === 'video' && (
					<span className={styles.hoverImg}>
						<img src={PlayIcon} alt="play icon" />
					</span>
				)}
				<img src={imageSrc} alt="course picture" />
			</div>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</div>
	);
}

export default ArticleSmall;