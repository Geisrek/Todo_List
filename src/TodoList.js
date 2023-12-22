import React , {useState} from 'react'

function TodoList(){
const [tasks,setTasks]=useState(["Walk","Eat","Run"])
const [newTask,setNewTask]=useState("")
function handelInputChange(event){
setNewTask(event.target.value)
}
function addTask(){

}
function deleteTask(index){

}
function mouveTaskUp(index){

}
function mouveTaskDown(index){
    
}
return(<div className="to-do-list">
    <h1>To-do-List</h1>
    <input 
    type='text'
    placeholder='Enter a task...'
    value={newTask}
    onChange={handelInputChange}
    />
    <button className='add-buttob'
    onClick={addTask}
    >add</button>
    <ol>
        {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
            </li>
        )}
    </ol>
    </div>)

}
export default TodoList;