import { useDispatch } from "react-redux"
import { changeStatusAction, deleteTodoAction } from "../../redux/action"


function Todo({todoInfo}) {

    const dispatch=useDispatch()

    const deleteTodo=()=>{
        dispatch(deleteTodoAction(todoInfo.id))
    }

    const changeTodo=(e)=>{
        const info={
            status:e.target.checked,
            id:todoInfo.id
        }
        dispatch(changeStatusAction(info))
    }
  return (
    <div   style={{marginTop:'15px'}}>
        <input type="checkbox" onChange={changeTodo}/>
        {
            todoInfo.status===true
            ?
            <s>{todoInfo.text}</s>
            :
            <span>{todoInfo.text}</span>
        }
        <button onClick={deleteTodo}>delete</button>
    </div>
  )
}

export default Todo