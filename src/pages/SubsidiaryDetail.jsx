import React from 'react';
import { useParams } from 'react-router-dom';
import { SUBSIDIARIES_FINANCE, computeYear1, computeYears2to10, projectedValuations, FX } from '../finance/data';
import { RevenueProfitLine, ValuationBar } from '../components/Charts';

export default function SubsidiaryDetail(){
  const { slug } = useParams();
  const config = SUBSIDIARIES_FINANCE[slug];
  if(!config) return (<main className='max-w-7xl mx-auto px-6 py-16'><h2>Not found</h2></main>);

  const monthly = computeYear1(slug);
  const yearly = computeYears2to10(slug);
  const valuations = projectedValuations(slug);

  const totalYear1Revenue = monthly.reduce((a,m)=>a+m.revenue,0);

  return (
    <main className='max-w-7xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold text-htNight'>{config.title}</h2>
      <p className='mt-4 text-gray-600'>Startup Capital: ${config.startupUSD.toLocaleString()} (₦{config.startupNGN.toLocaleString()})</p>

      <section className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded shadow'>
          <h3 className='font-semibold'>Year 1 - Monthly Projection (USD)</h3>
          <table className='w-full mt-4 text-sm'>
            <thead>
              <tr className='text-left'><th>Month</th><th>Revenue</th><th>Expenses</th><th>Profit</th></tr>
            </thead>
            <tbody>
              {monthly.map(r=> (
                <tr key={r.month}><td>M{r.month}</td><td>${r.revenue.toLocaleString()}</td><td>${r.expenses.toLocaleString()}</td><td>${r.profit.toLocaleString()}</td></tr>
              ))}
            </tbody>
          </table>

          <div className='mt-4'>Total Year-1 Revenue: ${totalYear1Revenue.toLocaleString()} (~₦{Math.round(totalYear1Revenue*FX).toLocaleString()})</div>
        </div>

        <div className='bg-white p-6 rounded shadow'>
          <h3 className='font-semibold'>Years 2–10 Summary (USD)</h3>
          <table className='w-full mt-4 text-sm'>
            <thead>
              <tr className='text-left'><th>Year</th><th>Revenue</th><th>Expenses</th><th>Profit</th></tr>
            </thead>
            <tbody>
              {yearly.map(y=> (
                <tr key={y.year}><td>{y.year}</td><td>${y.revenue.toLocaleString()}</td><td>${y.expenses.toLocaleString()}</td><td>${y.profit.toLocaleString()}</td></tr>
              ))}
            </tbody>
          </table>

          <div className='mt-4'>Projected Valuations: Year3 ${valuations.year3.toLocaleString()}, Year5 ${valuations.year5.toLocaleString()}, Year10 ${valuations.year10.toLocaleString()}</div>
        </div>
      </section>

      <section className='mt-8 bg-white p-6 rounded shadow'>
        <h3 className='font-semibold'>Visuals</h3>
        <div className='mt-4'>
          <RevenueProfitLine monthlyRows={monthly} yearlyRows={yearly} />
        </div>
        <div className='mt-6'>
          <ValuationBar valuations={valuations} />
        </div>
      </section>

    </main>
  );
}
