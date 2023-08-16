import * as  actionTypes from '../Actions/actionTypes'
export const todoReducer = (state=[],action) =>{
   switch(action.type){
      case actionTypes.AddNewTodo: return [action.payload,...state]
      case actionTypes.GetAllTodo: return action.payload
      case actionTypes.ToggleTodo: return state.map(todo =>(
         todo._id === action.payload._id ? {...todo , done:!todo.done}:todo
      ))
      case actionTypes.DeleteTodo: return state.filter(todo =>(todo._id !== action.payload._id))   
      default: return state
   }
}

 