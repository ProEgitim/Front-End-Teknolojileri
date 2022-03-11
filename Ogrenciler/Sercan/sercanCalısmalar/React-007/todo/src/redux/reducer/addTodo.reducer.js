
let initState = {
    todos:[],
    value : "",
    completed: false,
    selected: [],
}

export const addTodo = (state = initState, action)=> {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos: state.todos.concat(action.payload, state.completed ),
                
            };

        case 'ADD_TEXT' :
            return {
                ...state,
                value: action.payload,
            };
            case 'DELETE_TODO' :
                return {
                    ...state,
                    todos: state.todos.filter((todo,index)=> index !== action.payload),
                };

                case 'LİNE_THROUGH' :
                    return {
                        ...state,
                        selected : state.todos.filter((todo,index)=> index === action.payload),
                        
                    };

        default :
        return state;
    }

}