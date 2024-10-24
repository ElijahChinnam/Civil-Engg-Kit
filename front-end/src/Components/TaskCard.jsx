import React from 'react';

const TaskCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
        Start Task
      </button>
    </div>
  );
};

export default TaskCard;
