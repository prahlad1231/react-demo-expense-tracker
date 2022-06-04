import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";

const DUMMY_DATA = [
  {
    id: 1,
    date: new Date(2020, 10, 5),
    title: "Car Insurance",
    amount: 300
  },
  {
    id: 2,
    date: new Date(2021, 10, 16),
    title: "iPhone 13",
    amount: 900.80
  },
  {
    id: 3,
    date: new Date(2022, 1, 1),
    title: "Bike",
    amount: 2500
  },
  {
    id: 4,
    date: new Date(2020, 7, 18),
    title: "Laptop",
    amount: 1400
  },
];

function App() {

  const [ expenseData, setExpenseData ] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenseData((prevExpenses) => {
      return ([expense, ...prevExpenses]);
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
