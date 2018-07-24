export default {
  purchasePrice: { label: 'Purchase Price', addon: 'prepend', symbol: '$', step: 5000, max: 100000000 },
  interestRate: { label: 'Mortgage Interest Rate', addon: 'append', symbol: '%', step: 0.1, max: 100 },
  monthlyMortgage: { label: 'Calculated Mortgage Payment', addon: 'prepend', symbol: '$' },
  downPayment: { label: 'Down Payment', addon: 'append', symbol: '%', step: 1, max: 100 },
  salesCommission: { label: 'Sales Commission', addon: 'append', symbol: '%', step: 1, max: 30 },
  closingCosts: { label: 'Closing Costs', addon: 'append', symbol: '%', step: 1, max: 100 },
  propertyTax: { label: 'Property Tax', addon: 'append', symbol: '%', step: 0.1, max: 100 },
  hoa: { label: 'Monthly HOA Dues', addon: 'prepend', symbol: '$', step: 10, max: 10000 },
  maintenance: { label: 'Monthly Maintenance', addon: 'prepend', symbol: '$', step: 10, max: 10000 },
  insurance: { label: 'Monthly Insurance', addon: 'prepend', symbol: '$', step: 10, max: 10000 },
  annualAppreciation: { label: 'Annual Appreciation', addon: 'append', symbol: '%', step: 1, max: 100 },
  incomeTaxRate: { label: 'Marginal Income Tax Rate', addon: 'append', symbol: '%', step: 1, max: 100 },
  generalInflation: { label: 'Annual General Inflation', addon: 'append', symbol: '%', step: 1, max: 100 },
  rent: { label: 'Rent of Comparable Home', addon: 'prepend', symbol: '$', step: 100, max: 10000 },
  rentInflation: { label: 'Annual Rental Inflation', addon: 'append', symbol: '%', step: 1, max: 100 },
  rentReturn: { label: 'Annual Investment Rate of Return', addon: 'append', symbol: '%', step: 1, max: 100 }
}