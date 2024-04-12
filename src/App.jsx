import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import "./App.css";

const LSKEY = "MyTodoApp";

export default function App() {
  const initialTodos = JSON.parse(
    window.localStorage.getItem(LSKEY + ".todos")
  ) || [
    { id: 1, text: "My first todo", completed: false },
    { id: 2, text: "My second todo", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
