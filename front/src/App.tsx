import React, { useEffect, useState } from 'react';
import Analytics from './components/analytics';
const url = 'http://localhost:8080/';
function App() {
  const [data, setData] = useState<Paste[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsType>({
    total: 0,
    porn: 0,
    dataleaks: 0,
    money: 0,
    other: 0,
  });
  useEffect(() => {
    let source = new EventSource(url);
    source.onmessage = (e) => {
      setData(JSON.parse(e.data).pastes);
      setAnalytics(JSON.parse(e.data).analytics);
    };
    source.onerror = () => {
      source.close();
    };
  }, []);

  return (
    <div className='App'>
      <Analytics analytics={analytics} />
    </div>
  );
}

export default App;
