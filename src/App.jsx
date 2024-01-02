/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Criar funcionalidade 2",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];
    setTodos(newTodos);
  };

  const[search, setSearch] = useState("");

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo:null);
    setTodos(filteredTodos);
  }
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo)=>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  return (
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch}></Search>
        <div className='todo-list'>
          {todos.filter((todo)=>todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((todo)=> 
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          )}
        </div>
        <TodoForm addTodo={addTodo}/>
      </div>
  )
}

export default App
