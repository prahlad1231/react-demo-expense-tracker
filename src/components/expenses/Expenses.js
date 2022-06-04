import { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

  const [ filteredYear, setFilteredYear ] = useState('');

  const dropdownChangeHandler = (value) => {
    setFilteredYear(value);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={dropdownChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}      
    </Card>
  );
}
