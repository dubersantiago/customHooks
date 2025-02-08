import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer";


const initialState=[];
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo=()=>{

    const [toDos, dispatchToDo] = useReducer(todoReducer , initialState,init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(toDos));

    }, [toDos])
    

    const handleNewTodo=( todo )=>{
        //console.log({todo});
        const action={
            type:'[TODO] Add Todo',
            payload:todo
        }

        dispatchToDo(action);
    }

    const handleRemoveTodo=( id )=>{
        //console.log({todo});
        const action={
            type:'[TODO] Remove Todo',
            payload:id
        }

        dispatchToDo(action);
    }

    const handleToggleTodo=( id )=>{
        //console.log({todo});
        const action={
            type:'[TODO] Toggle Todo',
            payload:id
        }

        dispatchToDo(action);
    }


    return ({
        toDos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        toDosCount: toDos.length,
        PendingTodosCount: toDos.filter( todo => !todo.done ).length,
    })

}