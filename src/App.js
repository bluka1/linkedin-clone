import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chat from './components/features/chat/Chat';
import Feed from './components/features/feed/Feed';
import Header from './components/features/header/Header';
import Jobs from './components/features/jobs/Jobs';
import Notices from './components/features/notices/Notices';
import Network from './components/features/network/Network';
import NotImplemented from './components/features/NotImplemented/NotImplemented';
import Footer from './components/features/footer/Footer';
import Profile from './components/features/profile/Profile';
import General from './components/features/profile/ProfileMain/General';
import Articles from './components/features/profile/ProfileMain/Articles';
import Activity from './components/features/profile/ProfileMain/Activity';
import NetworkMain from './components/features/network/NetworkMain/NetworkMain';
import ReceivedConnections from './components/features/network/NetworkMain/ReceivedConnections';
import NoticesMain from './components/features/notices/NoticesMain/NoticesMain';
import Room from './components/features/chat/Room/Room';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<Feed />} />
						<Route path="/network" element={<Network />}>
							<Route path="connections" element={<NetworkMain />}>
								<Route path="received" element={<ReceivedConnections />} />
								<Route path="sent" element={<NotImplemented />} />
							</Route>
							<Route path="invitations" element={<NotImplemented />} />
							<Route path="teammates" element={<NotImplemented />} />
							<Route path="groups" element={<NotImplemented />} />
							<Route path="pages" element={<NotImplemented />} />
							<Route path="hashtags" element={<NotImplemented />} />
						</Route>
						<Route path="/jobs" element={<Jobs />} />
						<Route path="/chat" element={<Chat />}>
							<Route path="darlene" element={<Room />} />
							<Route path="theresa" element={<Room />} />
							<Route path="brandon" element={<Room />} />
							<Route path="kyle" element={<Room />} />
							<Route path="audrey" element={<Room />} />
							<Route path="design" element={<NotImplemented />} />
						</Route>
						<Route path="/notices" element={<Notices />}>
							<Route path="notifications" element={<NoticesMain />} />
							<Route path="notification-settings" element={<NotImplemented />} />
						</Route>
						<Route path="/profile" element={<Profile />}>
							<Route index element={<General />} />
							<Route path="articles" element={<Articles />} />
							<Route path="activity" element={<Activity />} />
						</Route>
						<Route path="/notimplemented" element={<NotImplemented />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
