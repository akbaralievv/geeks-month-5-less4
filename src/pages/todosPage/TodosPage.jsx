import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../../components/todo/Todo'
import {changeInputAction, addTodoAction, deleteAllAction } from '../../redux/action'

function TodosPage() {
    const dispatch=useDispatch()
    const {todoValue,todos}=useSelector(state=>state)
    
    const changeInput=(e)=>{
        dispatch(changeInputAction(e.target.value))
    }
    const addTodo=()=>{
        dispatch(addTodoAction(todoValue))
    }
    const deleteAll=()=>{
        dispatch(deleteAllAction())
    }
  return (
    <>
    
        <input type="text" placeholder='todo' onChange={changeInput} value={todoValue}/>
        <button onClick={addTodo}>add todo</button>
        <button onClick={deleteAll}>delete all</button>
        {
            todos.length>0
            ?
            todos.map(todo=><Todo key={todo.id} todoInfo={todo}/>)
            :
            <p>not</p>
        }
    </>
  )
}

export default TodosPage