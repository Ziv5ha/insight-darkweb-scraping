import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TrafficChart({
  traffic,
}: {
  traffic: { [key: number]: number };
}) {
  const labels = Object.keys(traffic);
  const data = {
    labels,
    datasets: [
      {
        label: 'Traffic',
        data: labels.map((key) => traffic[Number(key)]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line data={data} />;
}
