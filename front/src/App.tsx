import React, { useEffect, useState } from 'react';
import Analytics from './components/analytics';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import './styles/app.css';
const url = 'http://localhost:8080/';

function App() {
  const [displayFeed, setDisplayFeed] = useState(0);
  const [data, setData] = useState<Paste[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsType>({
    total: 0,
    porn: 0,
    dataleaks: 0,
    currency: 0,
    other: 0,
  });
  const [traffic, setTraffic] = useState(generateTrafficObj());
  useEffect(() => {
    let source = new EventSource(url);
    source.onmessage = (e) => {
      setData(JSON.parse(e.data).pastes);
      setAnalytics(JSON.parse(e.data).analytics);
      setTraffic(JSON.parse(e.data).traffic);
    };
    source.onerror = () => {
      source.close();
    };
  }, []);

  return (
    <div className='App'>
      <Navbar setDisplayFeed={setDisplayFeed} />
      <div className='page-container' style={{ left: `${displayFeed}vw` }}>
        <Analytics analytics={analytics} traffic={traffic} />
        <Feed data={data} />
      </div>
    </div>
  );
}

export default App;

// Helpers

const generateTrafficObj = () => {
  const traffic: { [key: number]: number } = {};
  for (let i = 0; i < 24; i++) {
    traffic[i] = 0;
  }
  return traffic;
};
