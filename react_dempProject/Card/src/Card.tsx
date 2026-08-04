import { useState, type ChangeEvent } from "react";

function Card() {
  let [input, setInput] = useState('');
  const [task, updateTask] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);
  


  function addTaskFun(e:any){
    console.log(index)
    e.preventDefault();
      if(index > -1){
        const updateArray = [...task]
        updateArray[index] = input;
        updateTask(updateArray);
        setIndex(-1)
      }else{
        updateTask([...task,input])
      }
      
      setInput('');
  }

  function deletTask(idx: number){
    const delTask =  task.filter((_,i) => i !== idx);
    updateTask(delTask);
  }

   function updateTaskMethod(idx: number){
      setIndex(idx);
      setInput(task[idx]);
  }

  function handleAddUpdate(e: any){
    setInput(e.target.value);
  }

  return (
    <div className="parent">
           <div className="container">
                <form onSubmit={addTaskFun}>
                  <input type='text' placeholder='Add new task'
                  value={input}
                  onChange={(e) => handleAddUpdate(e)}
                  ></input>
                 <button  className="add-button">{index !== -1 ?"Update" : "Save"}</button>
                </form>
           </div>
            <div className='task-display'>
                   {
                        task.map((data,idx)=>  
                        <div className="task-container" key={idx}>
                           <h4>{data}</h4>

                  <div className="btn-container">
                    <button className="update-button" onClick={() =>updateTaskMethod(idx)}>Update</button>

                    <button className="delete-button" onClick={() => deletTask(idx)}>
                        Delete
                    </button>
                  </div>
                </div>
                )
              }
            </div>
    </div>
  );
}

export default Card;