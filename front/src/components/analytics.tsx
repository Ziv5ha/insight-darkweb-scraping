import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Progress from './Progress';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

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
  const data = {
    labels: Object.keys(analyticsWithoutTotal(analytics)),
    datasets: [
      {
        label: '# of Pastes',
        data: Object.values(analyticsWithoutTotal(analytics)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {parseAnalytics()}
      <div className='chartContainer'>
        <Pie data={data} />
      </div>
    </div>
  );
}

/////// Helpers

const analyticsWithoutTotal = (obj: AnalyticsType) => {
  const temp: AnalyticsWithoutTotal = { ...obj };
  delete temp.total;
  return temp;
};
