import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense (props) {

    const saveExpenseDataHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random()
        }
        // console.log(expenseData);
        // console.log(typeof expenseData.date);
        let inputDate = expenseData.date;
        expenseData.date = new Date(inputDate);
        // console.log(typeof expenseData.date);
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
        </div>
    );
}