import React from 'react';
import PieChart from './PieChart';
import TrafficChart from './TrafficChart';

import Progress from './Progress';
import '../styles/analytics.css';

export default function Analytics({
  analytics,
  traffic,
}: {
  analytics: AnalyticsType;
  traffic: { [key: number]: number };
}) {
  const parseAnalytics = () => {
    const analyticsElem: JSX.Element[] = [];
    for (const [key, value] of Object.entries(analytics)) {
      if (key === 'total') continue;
      analyticsElem.push(
        <Progress key={key} label={key} value={value} total={analytics.total} />
      );
    }
    return analyticsElem;
  };

  return (
    <div>
      {parseAnalytics()}
    <div className='analytics-container'>
      <div className='pie-chart-container'>
        <PieChart analytics={analytics} />
      </div>
      <div className='traffic-chart-container'>
        <TrafficChart traffic={traffic} />
      </div>
    </div>
  );
}
