import React, { useEffect, useState } from 'react'
import Search from "./components/Search";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({})
  const [deletedTodo, setDeletedTodo] = useState("")
  const [todoName, setTodoName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://62499c3f852fe6ebf87d56f9.mockapi.io/todo');
      const result = await response.json();
      setTodos(result)
    };
    fetchData();
    }, [todo, deletedTodo]);

  const handleChangeTodoName = (e) => {
    setTodoName(e.target.value)
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    const addedItem = {
      name: todoName
    }
    const data = await fetch('https://62499c3f852fe6ebf87d56f9.mockapi.io/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedItem)
    });
    const result = await data.json();
    setTodoName("")
    setTodo(result)

  }

  const deleteTodo = async (id) => {
    const deletingTodo = todos.find(todo => todo.id === id)
    await fetch('https://62499c3f852fe6ebf87d56f9.mockapi.io/todo/' + deletingTodo.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      }
    });
    setDeletedTodo(deletingTodo)
  }

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <Search todos={todos} handleAddTodo={handleAddTodo} handleChangeTodoName={handleChangeTodoName} todoName={todoName}/>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
