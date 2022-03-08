
let initState = {
    todos:[]
}

export const addTodo = (state = initState, action)=> {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos: state.todos.concat(action.payload),    
            }

        default :
        return state;
    }

}