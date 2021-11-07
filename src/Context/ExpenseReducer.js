export default (state ,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':return {
             ...state,
             expenses:[...state.expenses,action.payload],

            
        }
        case 'SET_THEME':return{
            ...state,
            theme:!action.payload?"light":"dark"
        }
        default:return state
    }
}