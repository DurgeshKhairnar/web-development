import { useState } from 'react'
import {useTodo} from '../context/usecontext'


function InputBox(){

    const [task , setTask] = useState('')
     const { todoList , addTask , removeTask , updateTask } = useTodo();

     function handleSubmit(e){
      e.preventDefault();
      addTask(task)
      setTask(' ')
     }

    return (
          <div className="h-18 w-70 bg-black rounded-2xl flex justify-around items-center ">
                  <form className="flex justify-around items-center w-70" onSubmit={handleSubmit}>
                                <input
                                onChange={(e) => setTask(e.target.value)}
                                value={task}
                                type="text"
                                placeholder="Enter your name"
                                className="
                                  w-40
                                  h-5
                                  p-5
                                  border border-gray-300
                                  rounded-lg
                                  outline-none
                                  text-gray-800
                                  focus:text-white
                                  placeholder-gray-400
                                  focus:ring-2
                                  focus:border-blue-500
                                "
                    />    
                    <button className="w-15 h-10 bg-amber-700 rounded-2xl text-white active:bg-red-500">Add</button> 
                </form>  
          </div>
    )
}

export default InputBox;