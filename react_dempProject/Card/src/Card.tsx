import { useState } from "react";

function Card() {
  const [addTask, setTask] = useState('');
  const [task, updateTask] = useState<string[]>([]);
  


  function addTaskFun(e:any){
    e.preventDefault();
    
    updateTask([...task,addTask]);
    setTask('');
  }

  return (
    <div className="parent">
           <div className="container">
                <form onSubmit={addTaskFun}>
                  <input type='text' placeholder='Add new task'
                  value={addTask}
                  onChange={(e) => setTask(e.target.value)}
                  ></input>
                 <button >ADD</button>
                </form>
           </div>
            <div className='task-display'>
                   {
                        task.map((data,index)=> <h4 className="task-container" key={index}>{data}</h4>)
                   }
            </div>
    </div>
  );
}

export default Card;