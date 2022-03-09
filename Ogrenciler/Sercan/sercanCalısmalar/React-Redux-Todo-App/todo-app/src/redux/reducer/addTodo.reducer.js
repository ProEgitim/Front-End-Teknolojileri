const initState = {
    todos : [],
    text:'',
    value:'',
}

export const addTodo = (state = initState, action) => {
    switch(action.type){
       case "ADD_TODO" :
        return {
            ...state,
            todos: state.todos.concat(action.payload),
           
        }
        case "DELETE_TODO" :
        return {
            ...state,
            todos: state.todos.filter((todo,index) => index !== action.payload)
            
        }

        case "ADD_TEXT":
            return {
                ...state,
                text : action.payload,
            }

        default :
        return state;
    }

   
}
