import styles from './SectionSeparator.module.css';

function SectionSeparator(props) {
	return (
		<div className={styles.sectionSeparator}>
			<span className={styles.sectionSeparatorContent}>{props.children}</span>
		</div>
	);
}

export default SectionSeparator;
