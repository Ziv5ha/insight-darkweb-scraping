import React from 'react';
import Progress from './Progress';


export default function Analytics({ analytics }: { analytics: AnalyticsType }) {
  const parseAnalytics = () => {
    const analyticsElem: JSX.Element[] = [];
    for (const [key, value] of Object.entries(analytics)) {
      if (key === 'total') continue;
      analyticsElem.push(
        <Progress label={key} value={value} total={analytics.total} />
      );
    }
    return analyticsElem;
  };
  return (
    <div>
      {parseAnalytics()}
    </div>
  );
}

