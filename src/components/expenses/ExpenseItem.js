import { useState } from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitleHandler = () => {
    let title = prompt("Enter new title");
    setTitle(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={changeTitleHandler}>Change Title</button>
      </Card>
    </li>
  );
}
