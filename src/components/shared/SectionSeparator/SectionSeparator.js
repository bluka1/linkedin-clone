import styles from './SectionSeparator.module.css';

function SectionSeparator(props) {
	return (
		<div className={styles.sectionSeparator}>
			<div className={styles.sectionSeparatorContent}>{props.children}</div>
		</div>
	);
}

export default SectionSeparator;
