import types from "../types";
const newInitialState={
    todoValue:'',
    todos:[]
}
function reduser(state=newInitialState,action) {
    switch (action.type) {
        case types.CHANGE_INPUT:
            return {...state,todoValue:action.payload}
        case types.ADD_TODO:
            let id=1
            if(state.todos.length>0){
                id=+state.todos[state.todos.length-1].id+1
            }
            return {...state, todos:[...state.todos, {id, text:action.payload, status:false}], todoValue:''}
        
        case types.DELETE_TODO:
            const filteredArr = state.todos.filter(todo => +todo.id !== +action.payload)
            return {...state, todos:filteredArr}

        case types.CHANGE_STATUS:
            const newArray=state.todos.map(todo=>{
                if(+todo.id===+action.payload.id){
                    return {
                        ...todo,
                        status:action.payload.status
                    }
                }else{
                    return todo
                }
            })
            return {...state, todos:newArray}
        case types.DELETE_ALL:
            return {...state,todos:[],todoValue:''}
        default:
            return state
    }
}

export default reduser