import React, { useState } from "react";


const TodoList = () => {
    const [todoList, setTodoList] = useState("");
    const [todosLists, setTodosLists] = useState([]);

    const HandleSubmit = (e) => {
      e.preventDefault ();

      if (todoList !== "")
      setTodosLists([{id:`${todoList}` , todoList}, ...todosLists])
      setTodoList("");
    };

    const handleDelete = (id) => {
      const deleteTodoList = todosLists.filter((todo) => todo.id !== id);
      setTodosLists([...deleteTodoList]);
    }

  
  return (
    <div className="todolist">
      <div className="container">
       <h1> ToDo List </h1>
       <form className="form-container" onSubmit={HandleSubmit}>
        <input type="text" 
               value={todoList} 
               onChange={(e) => setTodoList(e.target.value)}/>
        <button className="btn">Add</button>

       </form>

       <ul className="all-todos">
        {
          todosLists.map((t) => (
            <li className="list-todo">
            <span className="todo-text" 
             key={t.id}>
            {t.todoList}</span>
          <button onClick={() => handleDelete(t.id)}><i className="fa fa-trash"></i></button>
          </li>
          ))
        }
       </ul>
      </div>
     </div>
 );
}

export default TodoList;