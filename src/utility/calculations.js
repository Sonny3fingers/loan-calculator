export function getPrincipal(amount) {
  return parseFloat(amount);
}
export function calculateInterest(interest) {
  return parseFloat(interest) / 100 / 12;
}
export function calculatePayments(years) {
  return parseFloat(years) * 12;
}

export function calculateResults(amount, interest, years) {
  let result = {};
  const principal = getPrincipal(amount);
  const calculatedInterest = calculateInterest(interest);
  const calculatedPayments = calculatePayments(years);

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = ((principal * x * calculatedInterest) / (x - 1)).toFixed(2);
  result.monthly = monthly;
  const totalPayments = (monthly * calculatedPayments).toFixed(2);
  result.totalPayments = totalPayments;
  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);
  result.totalInterest = totalInterest;
  return result;
}
