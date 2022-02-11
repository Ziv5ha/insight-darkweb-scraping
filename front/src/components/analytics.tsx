import React from 'react';
import PieChart from './PieChart';
import TrafficChart from './TrafficChart';
import '../styles/analytics.css';

export default function Analytics({
  analytics,
  traffic,
}: {
  analytics: AnalyticsType;
  traffic: { [key: number]: number };
}) {
  return (
    <div className='analytics-container'>
      <p>{analytics.total} pastes collected</p>
      <div className='pie-chart-container'>
        Distribution
        <PieChart analytics={analytics} />
      </div>
      <div className='traffic-chart-container'>
        Traffic
        <TrafficChart traffic={traffic} />
      </div>
    </div>
  );
}
