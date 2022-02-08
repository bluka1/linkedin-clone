import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chat from './components/features/chat/Chat/Chat';
import Feed from './components/features/feed/Feed/Feed';
import Header from './components/features/header/Header/Header';
import Jobs from './components/features/jobs/Jobs/Jobs';
import Network from './components/features/network/Network/Network';
import Notices from './components/features/notices/Notices/Notices';
import NotImplemented from './components/features/NotImplemented/NotImplemented';
import Footer from './components/features/footer/Footer/Footer';
import Profile from './components/features/profile/Profile';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<div className="content">
					<div className="main">
						<Routes>
							<Route path="/" element={<Feed />} />
							<Route path="/network" element={<Network />} />
							<Route path="/jobs" element={<Jobs />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/notices" element={<Notices />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/profile/articles" element={<NotImplemented />} />
							<Route path="/profile/activityandinterests" element={<NotImplemented />} />
							<Route path="/notimplemented" element={<NotImplemented />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
