
export const addTodo = todo => ({
    type : 'ADD_TODO',
    payload : todo,
});

export const addText = value=> ({
    type :'ADD_TEXT',
    payload: value,
})

export const deleteTodo = key => ({
    type: 'DELETE_TODO',
    payload:key,
})

export const underLine = key =>({
    type : 'LİNE_THROUGH',
    payload : key,
}) 