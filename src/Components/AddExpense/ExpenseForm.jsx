import React,{useState,useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import { useHistory } from 'react-router-dom'

const ExpenseForm = () => {
    let history = useHistory()
    let {expenses,addExpense}= useContext(GlobalContext)
    let [formData,setFormData]=useState({
        description:'',
        amount:'',
        date:'',
        note:''
    })
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        addExpense(formData)
        setFormData({
            description:'',
            amount:'',
            date:'',
            note:''
        })
        history.push('/')
    }
    console.log(expenses);
    return (
        <form className="inputwrapper" onSubmit={handleSubmit}>
              <input  className="expenseinput" type="text" placeholder="description" name="description" onChange={handleChange} value={formData.description} />
              <input type="number" className="expenseinput"    placeholder="Amount" name="amount" onChange={handleChange} value={formData.amount}/>
              <input className="expenseinput"  type="date"  name='date' onChange={handleChange} value={formData.date} />
              <textarea
                name="note"
                cols="30"
                rows="10"
                placeholder="Add a note for your expense (optional)"
                className="expenseinput textarea1" 
                onChange={handleChange}
                value={formData.note}
              >

              </textarea>
             <button  className="submitbtn" type='submit'>Save Expense</button>
         
     
      </form>
    )
}

export default ExpenseForm
