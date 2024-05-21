import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (expenseName.trim() && expenseAmount.trim()) {
      setExpenses([
        ...expenses,
        { name: expenseName.trim(), amount: parseFloat(expenseAmount) },
      ]);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseTracker;
