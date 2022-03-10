import NoticesMain from './NoticesMain/NoticesMain';
import NoticesSidebar from './NoticesSidebar/NoticesSidebar';

import styles from './Notices.module.css';

function Notices() {
	return (
		<div className={styles.notices}>
			<NoticesSidebar />
			<NoticesMain />
		</div>
	);
}

export default Notices;
