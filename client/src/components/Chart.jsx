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

const createChartData = (label, user1, user2, user1Val, user2Val, colors) => ({
  labels: [user1.login, user2.login],
  datasets: [
    {
      label,
      data: [user1Val, user2Val],
      backgroundColor: colors,
      borderRadius: 6,
    },
  ],
});

const chartOptions = (title) => ({
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: title,
      font: { size: 16 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1 }
    }
  }
});

const FollowerComparisonChart = ({ user1, user2 }) => {
  const followerData = createChartData('Followers', user1, user2, user1.followers, user2.followers, ['#34D399', '#60A5FA']);
  const followingData = createChartData('Following', user1, user2, user1.following, user2.following, ['#FBBF24', '#F472B6']);
  const reposData = createChartData('Repositories', user1, user2, user1.public_repos, user2.public_repos, ['#A78BFA', '#F87171']);

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
      <div className="flex-1 shadow-md rounded-md p-4 backdrop-blur-xl bg-gray-800">
        <Bar data={followerData} options={chartOptions('Follower Comparison')} />
      </div>
      <div className="flex-1 shadow-md rounded-md p-4 backdrop-blur-xl bg-gray-800">
        <Bar data={followingData} options={chartOptions('Following Comparison')} />
      </div>
      <div className="flex-1 shadow-md rounded-md p-4 backdrop-blur-xl bg-gray-800">
        <Bar data={reposData} options={chartOptions('Repositories Comparison')} />
      </div>
    </div>
  );
};

export default FollowerComparisonChart;
