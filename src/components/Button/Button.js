import styles from './Button.module.css';

function Button({ text, variant, icon }) {
	return (
		<button className={`${styles[variant]} ${styles.btn}`}>
			<span>{text}</span>
			<img src={icon} alt={text} />
		</button>
	);
}

export default Button;
