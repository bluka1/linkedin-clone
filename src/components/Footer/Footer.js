import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import SelectBtn from '../Select/SelectBtn';

import questionmarkIcon from '../../img/questionmark.svg';
import settingsIcon from '../../img/settings.svg';
import logoIcon from '../../img/blue-logo.svg';
import styles from './Footer.module.css';

function Footer() {
	const selectOptions = [
		{ value: 'ENGLISH', label: 'ENGLISH' },
		{ value: 'CROATIAN', label: 'CROATIAN' },
	];

	const selectStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: 'white',
			border: 0,
			color: 'black',
			cursor: 'pointer',
		}),
	};

	return (
		<div className={styles.footer}>
			<div className={styles.footerLogo}>
				<img src={logoIcon} alt="logo" />
				<p>
					Linked<span className={styles.logoText}>In</span>
				</p>
			</div>

			<div className={styles.footerNavigation}>
				<h3>Navigation</h3>
				<div className={styles.footerNavigationColumns}>
					<ul className={styles.footerNavigationColumn}>
						<Link to="/notimplemented">
							<li>About</li>
						</Link>
						<Link to="/notimplemented">
							<li>Careers</li>
						</Link>
						<Link to="/notimplemented">
							<li>Advertising</li>
						</Link>
						<Link to="/notimplemented">
							<li>Small business</li>
						</Link>
					</ul>
					<ul className={styles.footerNavigationColumn}>
						<Link to="/notimplemented">
							<li>Talent Solutions</li>
						</Link>
						<Link to="/notimplemented">
							<li>Marketing Solutions</li>
						</Link>
						<Link to="/notimplemented">
							<li>Sales Solutions</li>
						</Link>
						<Link to="/notimplemented">
							<li>Safery Center</li>
						</Link>
					</ul>
					<ul className={styles.footerNavigationColumn}>
						<Link to="/notimplemented">
							<li>Community Guidelines</li>
						</Link>
						<Link to="/notimplemented">
							<li>Privacy & Terms</li>
						</Link>
						<Link to="/notimplemented">
							<li>Mobile App</li>
						</Link>
					</ul>
				</div>
			</div>

			<div className={styles.footerFastAccess}>
				<h3>Fast access</h3>
				<Button text="QUESTIONS?" icon={questionmarkIcon} variant="filled" />
				<Button text="SETTINGS" icon={settingsIcon} variant="outlined" />
			</div>

			<div className={styles.footerLanguage}>
				<h3>Language</h3>
				<SelectBtn defaultValue={selectOptions[0]} options={selectOptions} styles={selectStyles} />
			</div>
		</div>
	);
}

export default Footer;
