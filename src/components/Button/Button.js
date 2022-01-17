import styles from './Button.module.css';

function Button({ text, variant, Icon, iconPlacement, onClick }) {
	if (iconPlacement === 'right') {
		return (
			<button className={`${styles[variant]} ${styles.btn}`}>
				<span>{text}</span>
				<Icon />
			</button>
		);
	} else if (iconPlacement === 'left') {
		return (
			<button className={`${styles[variant]} ${styles.btn}`}>
				<Icon />
				<span>{text}</span>
			</button>
		);
	}
	return (
		<button className={`${styles[variant]} ${styles.btn}`} onClick={onClick}>
			<span>{text}</span>
		</button>
	);
}

export default Button;
