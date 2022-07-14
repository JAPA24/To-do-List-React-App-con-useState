import { useState } from "react";


export default function TodoApp(){

    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);



    function handleOnchange(e){
       const value = e.target.value;
        setTitle(value);
    }


    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title:title,
            completed: false
        };
        setTodos([...todos, newTodo])
    }

    return <div className="todoContainer">
        <form className ="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleOnchange} className ="todoInput" value = {title} />
            <input onClick = {handleSubmit} type="submit" value="Create todo" className ="buttonCreate"/>
        </form> 

        <div className="todosContainer">
            {todos.map((item) => (  
                <div key = {item.id}> {item.title}</div>
            ))}
        </div>
    </div>;
}
    
