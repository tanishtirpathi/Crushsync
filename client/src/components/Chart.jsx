// components/FollowerComparisonChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FollowerComparisonChart = ({ user1, user2 }) => {
  const data = {
    labels: [user1.login, user2.login],
    datasets: [
      {
        label: 'Followers',
        data: [user1.followers, user2.followers],
        backgroundColor: ['#34D399', '#60A5FA'], // Tailwind green and blue
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Follower Comparison',
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default FollowerComparisonChart;
