import { useState , useEffect } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
import {todoList , TodoProvider , useTodo }  from './context/usecontext';
 

function App() {
  


    const [todoList , setTodoList] = useState(() => {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList));
}, [todoList]);

  const addTask = (task) => {
    if(!task) return ;
    setTodoList([{id:Date.now(),task,isComplete:false },...todoList])
    console.log(todoList)
  }

  function removeTask(idx){
      const arr  = todoList.filter((_,id) => id !== idx);
      setTodoList(arr)
  }

  function updateTask(id,myTask){
    console.log("id",id,)
      setTodoList(prev => prev.map((item) => 
        item.id === id ? {...item,task:myTask} : item),)
      console.log(todoList)
  }

  return (
    <TodoProvider value={{todoList , addTask ,removeTask , updateTask}}>
        <InputBox />
        <TaskList />
    </TodoProvider>
  )
}

export default App






//   const [task,setTask] = useState('');
//   const [index,setIndex] = useState(-1);
//   const [complete , setComplete] = useState(false);

//   function handleSubmit(e){
//       e.preventDefault(); 
//       if(!task) return ;
//       if(index > -1){
//           const updateTask = [...todos]
//           updateTask[index] = task
//           setTodos(updateTask)
//           setIndex(-1)
//       }else{
//           setTodos([...todos,task])
//       }
    
//       setTask('')
//   }

//   function addTask(e){
//     // console.log(e.target.value)
//     setTask(e.target.value)
//   }

//   function deleteTodo(idx){
//   const arr = todos.filter((_,id) => (id !== idx))
//      setTodos(arr)
//   }
  
//   function updateValue(id){
//     setTask(todos[id]);
//     setIndex(id)
//   }
