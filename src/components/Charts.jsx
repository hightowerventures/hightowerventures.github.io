import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export function RevenueProfitLine({monthlyRows, yearlyRows}){
  const months = monthlyRows.map(r=>`M${r.month}`);
  const monthRevenue = monthlyRows.map(r=>r.revenue);
  const monthProfit = monthlyRows.map(r=>r.profit);

  const yearLabels = yearlyRows.map(y=>`Y${y.year}`);
  const yearRevenue = yearlyRows.map(y=>y.revenue);
  const yearProfit = yearlyRows.map(y=>y.profit);

  const data = {
    labels: [...months, ...yearLabels],
    datasets: [
      { label: 'Revenue (USD)', data: [...monthRevenue, ...yearRevenue], fill:false, tension:0.2, borderColor:'#0B132B' },
      { label: 'Profit (USD)', data: [...monthProfit, ...yearProfit], fill:false, tension:0.2, borderColor:'#F0C75E' }
    ]
  };

  return <div className='w-full'><Line data={data} /></div>;
}

export function ValuationBar({valuations}){
  const data = {
    labels:['Year 3','Year 5','Year 10'],
    datasets:[{ label:'Projected Valuation (USD)', data:[valuations.year3, valuations.year5, valuations.year10], backgroundColor:['#F0C75E','#E5E5E5','#0B132B'] }]
  };
  return <div className='w-full'><Bar data={data} /></div>;
}
