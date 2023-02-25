import types from './types'

export function changeInputAction(inputValue) {
  return {
    type: types.CHANGE_INPUT,
    payload:inputValue
    
}
}
export  function addTodoAction(todo){
    return{
        type:types.ADD_TODO,
        payload:todo
    }
}
export function deleteTodoAction(id){
    return{
        type:types.DELETE_TODO,
        payload:id
    }
}
export function changeStatusAction(objTodo){
    return{
        type:types.CHANGE_STATUS,
        payload:objTodo
    }
}
export function deleteAllAction(){
    return{
        type:types.DELETE_ALL
    }
}