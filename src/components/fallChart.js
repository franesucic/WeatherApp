import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function FallChart({chartData}) {
    return <Bar data={chartData}/>
}

export default FallChart;