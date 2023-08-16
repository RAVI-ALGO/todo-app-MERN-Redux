import {addNewTodo} from './Redux/Actions/index'
import { useDispatch } from 'react-redux';
import './App.css';
import {
  Ripple,
  initTE,
} from "tw-elements";

import { useState } from 'react';
import TaskList from './components/TaskList';
initTE({ Ripple });



function App() {
  const [value, setValue] = useState("")
  const dispatch = useDispatch() 
  const handleAddTodo = () =>{
    dispatch(addNewTodo(value));
    setValue('')
  }

  return (
    <div className="App">
      <div className=' text-6xl font-bold my-8'>Todo list </div>
      <div className=' w-1/2 mx-auto '>
        <div className="relative mb-4 flex flex-wrap  py-4">
          <input
            type="text"
            value={value}
            
            onChange={e => setValue(e.target.value)}
            className="  capitalize relative m-0  block w-[1px] min-w-0 flex-auto rounded-0 mx-3 border-b-2 border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700  transition duration-200 ease-in-out focus:z-[3] focus:border-none  focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Enter new todo ..."
            aria-label="Enter new todo ..."
            aria-describedby="button-addon2" />
          <button
            className=" flex  rounded px-3 pt-1  text-lg font-medium  leading-normal text-white  bg-purple-600"
            onClick={handleAddTodo }
            type="button"
            id="button-addon2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg> Add
          </button>
        </div>
        
        <TaskList />
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default App;
