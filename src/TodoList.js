import React , {useState} from 'react'
//the imojies site is : https://www.freetool.dev/emoji-picker
function TodoList(){
const [tasks,setTasks]=useState(["Walk","Eat","Run"])
const [newTask,setNewTask]=useState("")
function handelInputChange(event){
setNewTask(event.target.value)
}
function addTask(){
    if (newTask.trim()!==""){
   setTasks(t=>[...t,newTask]);
   setNewTask("")
    }
}
function deleteTask(index){
  const updatedTasks=tasks.filter((element,i)=> i!==index);
  setTasks(updatedTasks)

}
function mouveTaskUp(index){
  if(index>0){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
    setTasks(updatedTasks)
  }
}
function mouveTaskDown(index){
    if(index<tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
        setTasks(updatedTasks)
      }
}
return(<div className="to-do-list">
    <h1>To-do-List</h1>
    <input 
    type='text'
    placeholder='Enter a task...'
    value={newTask}
    onChange={handelInputChange}
    />
    <button className='add-button'
    onClick={addTask}
    >add</button>
    <ol>
        {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button'
                onClick={()=>deleteTask(index)}>🗑️</button>
                <button className='mouve-button'
                onClick={()=>mouveTaskUp(index)}>👆🏻</button>
                <button className='mouve-button'
                onClick={()=>mouveTaskDown(index)}>👇🏻</button>
            </li>
        )}
    </ol>
    </div>)

}
export default TodoList;