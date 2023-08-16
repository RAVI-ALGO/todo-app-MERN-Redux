import React, { useEffect} from "react";
import { getTodo, toggleTodo, deleteTodo } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import TodoNav from './todo-nav'
import { ALL_TODOS } from "../Redux/Actions/actionTypes";

const TaskList = () => {
  
    const dispatch = useDispatch()
    const alltodos = useSelector(state => state.todos)
    const currentTab = useSelector(state =>state.currentTab)
   
    const toggletodo = (id) => {
        dispatch(toggleTodo(id));
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));

    }
    const filterTodos = (alltodos, currentTab) => {
        
        if (currentTab ===ALL_TODOS) {
            return alltodos;
        } else if (currentTab === 'Active Todos') {
            return alltodos.filter(todo => !todo.done);
        } else if (currentTab === 'Done Todos') {
            return alltodos.filter(todo => todo.done);
        }
    }
     
    const filteredTodos = filterTodos(alltodos, currentTab);
    console.log(filteredTodos);
    useEffect(
        () => {
            dispatch(getTodo);
        }
        , [])

      
    return (
        <div className="justify-start mt-4" >
        <TodoNav currentTab={currentTab}/>
            {
                filteredTodos.map(item => {
                    return (<div key={item._id}  className={`${item.done === true ? 'text-green-600' :''} flex justify-between py-2 mb-2 font-semibold border rounded cursor-pointer shadow`}><h4 className="capitalize  px-4" onClick={() => { toggletodo(item._id) }} >{item.todo}</h4>
                        <div className="flex flex-row">
                      
                        <span onClick={() => { handleDelete(item._id) }} className="px-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg></span>
                        </div>
                        </div>)
                })
            }


        </div>
    )
}

export default TaskList;