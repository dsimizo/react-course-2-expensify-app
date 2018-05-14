export default (expenses) => {
  const amounts = expenses.map((expense) => expense.amount);
  return amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};