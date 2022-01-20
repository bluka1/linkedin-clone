import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Jobs from './components/Jobs/Jobs';
import Network from './components/Network/Network';
import Notices from './components/Notices/Notices';
import NotImplemented from './components/NotImplemented/NotImplemented';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<Feed />} />
						<Route path="/network" element={<Network />} />
						<Route path="/jobs" element={<Jobs />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/notices" element={<Notices />} />
						<Route path="/notimplemented" element={<NotImplemented />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
