import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([])
  const[toDo,setTodo]=useState('')
  
  const handleDelete=(todos)=>{
    const deletVal=[...toDos]
    deletVal.splice(toDos,1)
    setTodos(deletVal)
  }
  const Delete=(toDo)=>{
    const deletVal=[...toDo]
    deletVal.splice(toDo)
    setTodo(deletVal)
  }
  return (  
    <div className="app">
      <div className="Heading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Monday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>Delete(toDo) }className="fas fa-times"></i>
      </div>
      <div className='submit'>
      <button onClick={()=>setTodos([...toDos,{id:Date.now(),text :toDo,status:false}])}> Add</button>
        </div>
        
      <div className="todos">
        {toDos.map((obj)=>{

     return(     
        <div className="todo">
          <div className="left">
            <input 
            onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <button onClick={()=>handleDelete(toDos)}  >delete</button>
          </div>
        </div>) })}
        {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>

    </div>
        
  );
}

export default App;



//className="fas fa-times"