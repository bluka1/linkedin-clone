import PlayIcon from '../../../../img/play.svg';

import styles from './ArticleBig.module.css';

function ArticleBig({ imageSrc, title, subtitle, articleType }) {
	return (
		<div className={styles.articleBig}>
			<div className={styles.picture}>
				{articleType === 'video' && (
					<span className={styles.hoverImg}>
						<img src={PlayIcon} alt="play icon" />
					</span>
				)}
				<img src={imageSrc} alt="project or article picture" />
			</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>
	);
}

export default ArticleBig;
