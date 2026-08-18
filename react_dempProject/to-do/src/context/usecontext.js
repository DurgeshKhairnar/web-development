import { createContext , useContext} from 'react';


export const todoList = createContext({
    todos:[{
        id:1,
        task:"Todo List",
        isComplete:false
    }],
    addTask:(task) => {},
    removeTask:(id) => {},
    updateTask:(id) => {}
})


export const TodoProvider = todoList.Provider;

export const useTodo = () => {
    return useContext(todoList);
}