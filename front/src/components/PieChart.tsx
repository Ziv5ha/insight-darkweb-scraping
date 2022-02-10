import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function PieChart({ analytics }: { analytics: AnalyticsType }) {
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
  return <Pie data={data} />;
}

/////// Helpers

const analyticsWithoutTotal = (obj: AnalyticsType) => {
  const temp: AnalyticsWithoutTotal = { ...obj };
  delete temp.total;
  return temp;
};
