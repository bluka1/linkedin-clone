import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import NewArticleButton from '../../shared/NewArticleButton/NewArticleButton';

import styles from './Chat.module.css';
import ChatRoom from './ChatRoom/ChatRoom';

function Chat() {
	const chatRooms = [
		{
			linkTo: 'darlene',
			imageSrc: '/images/darlene.jpg',
			personName: 'Darlene Black',
			chatMessage: 'Hey, how is your project?',
		},
		{
			linkTo: 'theresa',
			imageSrc: '/images/theresa.jpg',
			personName: 'Theresa Steward',
			chatMessage: 'Hi, Dmitry! I have a work for you. We were talking about new opportunities.',
		},
		{
			linkTo: 'brandon',
			imageSrc: '/images/brandon.jpg',
			personName: 'Brandon Wilson',
			chatMessage: 'I am Russian and I am learning English language.',
		},
		{ linkTo: 'kyle', imageSrc: '/images/kyle.jpg', personName: 'Kyle Fisher', chatMessage: 'So, It’s up to you!' },
		{
			linkTo: 'audrey',
			imageSrc: '/images/audrey.jpg',
			personName: 'Audrey Alexander',
			chatMessage: 'When you got it?',
		},
		{
			linkTo: 'design',
			imageSrc: '/images/designConference.jpg',
			personName: 'Design Conference',
			chatMessage: 'Can you guys help me with it?',
		},
	];

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/chat') {
			navigate('/chat/darlene');
		}
	}, [navigate, location]);

	return (
		<div className={styles.chat}>
			<div className={styles.chatNavbar}>
				<div className={styles.chatRooms}>
					<p className={styles.title}>Chats</p>
					{chatRooms.map((room) => (
						<NavLink
							to={room.linkTo}
							key={room.linkTo}
							className={({ isActive }) => (isActive ? styles.active : undefined)}
						>
							<ChatRoom imageSrc={room.imageSrc} personName={room.personName} chatMessage={room.chatMessage} />
						</NavLink>
					))}
				</div>

				<NewArticleButton text="Start new chat" />
			</div>
			<Outlet />
		</div>
	);
}

export default Chat;
