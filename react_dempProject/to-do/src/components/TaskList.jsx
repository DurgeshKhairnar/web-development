import { useTodo } from '../context/usecontext';
import { useState } from 'react'

function TaskList(){

       const [isRead, setRead] = useState(-1)
       const [task, setTask] = useState('')

      const { todoList , addTask , removeTask, updateTask } = useTodo();

     function setIndexTaskList(idx,task1){
                       setRead(idx);
                       setTask(task1)
                               
      }

      function updateTaskList(idx,upTask){
            updateTask(idx,upTask)
            setRead(-1);
            setTask(' ')
      }

    return (
         <div className=' p-5 '>
            
                        {

                           todoList.map((prev,idx) => (
                              <div className="w-70 h-10 m-1 flex items-center p-5  bg-purple-500 rounded-2xl text-white justify-between " key={idx}>
                               
                              <input type='text' value={isRead === idx ? task : prev.task} readOnly={isRead !== idx}
                              onChange={(e) => setTask(e.target.value)}
                              />
                                  <div>
                                        <button 
                                        onClick={() => removeTask(idx)}
                                        className=" h-8 p-1 m-1 rounded-2xl bg-red-500">
                                              <i className="fa-solid fa-xmark"></i>
                                        </button>
                                        <button 
                                        onClick={() => {
                                          if(isRead == idx){
                                                      updateTaskList(prev.id,task)
                                          }else{
                                                      setIndexTaskList(idx,prev.task)
                                          }
                                        }}
                                        className=" h-8 p-1 rounded-2xl bg-red-500">
                                              <i className="fa-solid fa-pen"></i>
                                        </button>
                                  </div>
                              </div>
                           ))
                        }
                        
                </div>  
    )
}


export default TaskList;