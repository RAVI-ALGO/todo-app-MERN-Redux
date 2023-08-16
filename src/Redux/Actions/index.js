import axios from 'axios'
import {AddNewTodo,GetAllTodo,ToggleTodo,DeleteTodo ,ToggleTab} from './actionTypes'
export const addNewTodo = (data) => async(dispatch)=> {
        await axios.post('http://localhost:8000/add-todo',{"todo":data}).then((res)=>{
            console.log(res)
            dispatch({type:AddNewTodo,payload:res.data})
        })
        .catch((err)=>{
            console.log(err);
        });
}

export const getTodo =  async(dispatch)=> {
    await axios.get('http://localhost:8000/get-todo').then((res)=>{
        console.log(res)
        dispatch({type:GetAllTodo, payload:res.data.data})
    })
    .catch((err)=>{
        console.log(err);
    });
}

export const toggleTodo = (id) => async(dispatch)=> {
    await axios.get(`http://localhost:8000/toggle-todo/${id}`).then((res)=>{
        console.log(res)
        dispatch({type:ToggleTodo, payload:res.data.data})
    })
    .catch((err)=>{
        console.log(err);
    });
}

export const deleteTodo = (id) => async(dispatch)=> {
    await axios.delete(`http://localhost:8000/delete-todo/${id}`).then((res)=>{
        console.log(res)
        dispatch({type:DeleteTodo, payload:res.data.data})
    })
    .catch((err)=>{
        console.log(err);
    });
}

 export const toggleTab = (tab) => async(dispatch)=> {
    
        dispatch({type:ToggleTab, filter:tab})
    
}