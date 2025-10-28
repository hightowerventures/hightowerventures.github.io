export const FX = 1600; // NGN per USD

export const SUBSIDIARIES_FINANCE = {
  technologies: {
    title: 'High Tower Technologies',
    startupUSD: 750000,
    startupNGN: 750000 * FX,
    startingMonthlyRevenue: 25000,
    expenseRatio: 0.30, // 30%
    annualGrowth: 0.20, // 20% after year1
    valuationMultiple: 5
  },
  foods: {
    title: 'High Tower Foods',
    startupUSD: 600000,
    startupNGN: 600000 * FX,
    startingMonthlyRevenue: 15000,
    expenseRatio: 0.60,
    annualGrowth: 0.18,
    valuationMultiple: 2.5
  },
  interactive: {
    title: 'High Tower Interactive',
    startupUSD: 600000,
    startupNGN: 600000 * FX,
    startingMonthlyRevenue: 10000,
    expenseRatio: 0.50,
    annualGrowth: 0.22,
    valuationMultiple: 4
  },
  pharmacy: {
    title: 'High Tower Pharmacy',
    startupUSD: 550000,
    startupNGN: 550000 * FX,
    startingMonthlyRevenue: 8000,
    expenseRatio: 0.40,
    annualGrowth: 0.17,
    valuationMultiple: 3
  },
  farms: {
    title: 'High Tower Farms',
    startupUSD: 900000,
    startupNGN: 900000 * FX,
    startingMonthlyRevenue: 12000,
    expenseRatio: 0.55,
    annualGrowth: 0.16,
    valuationMultiple: 2.5
  },
  realestate: {
    title: 'High Tower Real Estate',
    startupUSD: 1000000,
    startupNGN: 1000000 * FX,
    startingMonthlyRevenue: 20000,
    expenseRatio: 0.65,
    annualGrowth: 0.15,
    valuationMultiple: 1.2
  },
  markets: {
    title: 'High Tower Markets',
    startupUSD: 650000,
    startupNGN: 650000 * FX,
    startingMonthlyRevenue: 9000,
    expenseRatio: 0.45,
    annualGrowth: 0.23,
    valuationMultiple: 5
  }
};

export function computeYear1(subKey){
  const s = SUBSIDIARIES_FINANCE[subKey];
  if(!s) return null;
  const rows = [];
  let revenue = s.startingMonthlyRevenue;
  for(let m=1;m<=12;m++){
    const expenses = +(revenue * s.expenseRatio).toFixed(2);
    const profit = +(revenue - expenses).toFixed(2);
    rows.push({ month: m, revenue, expenses, profit });
    revenue = +(revenue * 1.10).toFixed(2);
  }
  return rows;
}

export function computeYears2to10(subKey){
  const s = SUBSIDIARIES_FINANCE[subKey];
  if(!s) return null;
  const y1 = computeYear1(subKey).reduce((acc,r)=>acc + r.revenue,0);
  const years = [];
  let revenue = y1;
  for(let y=2;y<=10;y++){
    revenue = +(revenue * (1 + s.annualGrowth)).toFixed(2);
    const expenses = +(revenue * s.expenseRatio).toFixed(2);
    const profit = +(revenue - expenses).toFixed(2);
    years.push({ year: y, revenue, expenses, profit });
  }
  return years;
}

export function projectedValuations(subKey){
  const s = SUBSIDIARIES_FINANCE[subKey];
  const years = computeYears2to10(subKey);
  if(!years) return null;
  const y3 = years.length >= 2 ? years[1].revenue : years[0].revenue;
  const y5 = years.length >= 4 ? years[3].revenue : years[years.length-1].revenue;
  const y10 = years[years.length-1].revenue;
  return {
    year3: +(y3 * s.valuationMultiple).toFixed(2),
    year5: +(y5 * s.valuationMultiple).toFixed(2),
    year10: +(y10 * s.valuationMultiple).toFixed(2)
  };
}
