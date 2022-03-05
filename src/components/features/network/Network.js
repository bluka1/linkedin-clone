import { Outlet } from 'react-router';
import { ReactComponent as LinkIcon } from '../../../assets/icons/link.svg';
import { ReactComponent as DiscIcon } from '../../../assets/icons/disc.svg';
import { ReactComponent as ArchiveIcon } from '../../../assets/icons/archive.svg';
import { ReactComponent as GroupsIcon } from '../../../assets/icons/users-s.svg';
import { ReactComponent as LayersIcon } from '../../../assets/icons/layers.svg';
import { ReactComponent as HashIcon } from '../../../assets/icons/hash.svg';

import Navbar from '../../shared/Navbar/Navbar';

import styles from './Network.module.css';

function Network() {
	const navlinks = [
		{ linkTo: 'connections', icon: <LinkIcon />, title: 'connections', number: 1038 },
		{ linkTo: 'invitations', icon: <DiscIcon />, title: 'invitations', number: 2 },
		{ linkTo: 'teammates', icon: <ArchiveIcon />, title: 'teammates' },
		{ linkTo: 'groups', icon: <GroupsIcon />, title: 'groups', number: 6 },
		{ linkTo: 'pages', icon: <LayersIcon />, title: 'pages', number: 28 },
		{ linkTo: 'hashtags', icon: <HashIcon />, title: 'hashtags', number: 8 },
	];
	return (
		<div className={styles.network}>
			<Navbar navlinks={navlinks} />
			<Outlet />
		</div>
	);
}

export default Network;
