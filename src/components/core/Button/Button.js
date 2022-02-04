import styles from './Button.module.css';

function Button({ text, variant, Icon, iconPlacement, onClick }) {
	return (
		<button className={`${styles[variant]} ${styles.btn}`} onClick={onClick}>
			{iconPlacement === 'left' && <Icon />}
			<span>{text}</span>
			{iconPlacement === 'right' && <Icon />}
		</button>
	);
}

export default Button;
