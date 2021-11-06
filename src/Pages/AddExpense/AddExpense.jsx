import React,{Fragment} from 'react'
import ExpenseForm from '../../Components/AddExpense/ExpenseForm'
import Expenseheader from '../../Components/AddExpense/Expenseheader'


const AddExpense = () => {
    return (
        <Fragment>
            <Expenseheader/>
            <ExpenseForm/>            
        </Fragment>
    )
}

export default AddExpense
