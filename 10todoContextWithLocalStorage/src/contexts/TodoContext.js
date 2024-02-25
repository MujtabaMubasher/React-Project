import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        // id: 1,
        // text: 'Hello World',
        // completed: false,
    }],

    addTodo: (text) => {},
    updateTodo: (id, text) => {},
    deleteTodo: (id) =>{},
    toggleComplete: (id) => {}
})


export function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider