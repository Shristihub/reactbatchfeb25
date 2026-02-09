import { useState } from "react";
export  default function TodoList(){
    const[todos,setTodos] = useState([{text:'Read a book'}, {text:'Try React'}]);
    const[inputValue, setInputValue] = useState('');


    function addTodos(){
        console.log(todos);
        // this method takes the current state of todos and adds a new todo to it.
        //  It creates a new array with the existing todos and the new todo,
        //use spread opearator - to spread the array
        const newTodo = {id:todos.length+1,text:inputValue};
        setTodos([...todos, newTodo]);
        setInputValue(''); // Clear the input field after adding a todo
    }
    function deleteTodo(id){
        // this method takes the id of the todo to be deleted 
        //  filters out that todo from the todos array.
        const newtodos = todos.filter(todo=>todo.id!==id)
        setTodos(newtodos);
    }
    return (
        <>
    <div className="todo-container">
        <input type="text" placeholder="Add a new todo" value={inputValue}
                              onChange={(e)=>setInputValue(e.target.value)}/> 
        <button type="button" onClick= {addTodos}>Add Todo </button> 
    </div>
    <div className="todo-list">    
          {
            todos.map(todo=>
                     <>
                     <li  key={todo.id}>{todo.text}
                     <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                     </li>
                     </>
                    )
          }
    </div>
    </>
    
    );
}