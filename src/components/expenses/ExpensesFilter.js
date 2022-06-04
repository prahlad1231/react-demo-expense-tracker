import './ExpenseFilter.css';

export default function ExpensesFilter (props) {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='filter-by-year'>
         <div>
            <label>Filter by year</label>
        </div>
            <div className='dropdown'>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}