
export const addText = value => ({
   type: 'ADD_TEXT',
   payload : value ,
})


export const addTodo = todo => ({
   type: 'ADD_TODO' ,
   payload: todo,
});

export const deleteTodo = key => ({
   type: 'DELETE_TODO',
   payload : key,
})

