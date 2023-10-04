import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import chartData from './chartdata';

const BarChart = () => {
  return (
    <div>
    <Bar
      data={chartData}
      
    />
  </div>
  )
}

export default BarChart