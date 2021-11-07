import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'


const Expenseheader = () => {
    let {theme}=useContext(GlobalContext)

    return (
        <div className={"expenseheader "+ theme}>
            <div className="expensecont">
                <h1>Add Expense</h1>
            </div>
        </div>
    )
}

export default Expenseheader
