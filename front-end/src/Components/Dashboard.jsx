import React from 'react';
import TaskCard from './TaskCard';

const Dashboard = ({ username }) => {
  const tasks = [
    {
      title: 'Understanding Load-bearing Walls',
      description: 'Learn how walls bear the weight of a building and distribute the load efficiently.',
    },
    {
      title: 'Bridge Mechanics',
      description: 'Build a bridge and understand the mechanics behind different types of bridges.',
    },
    {
      title: 'Skyscraper Design',
      description: 'Learn how to design earthquake-resistant skyscrapers.',
    },
    {
      title: 'Foundation and Soil Mechanics',
      description: 'Study the effects of different soil types on building foundations.',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Welcome, {username}!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard key={index} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
