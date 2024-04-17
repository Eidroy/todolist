import { useState, useEffect, useContext } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import { ThemeProvider, ThemeContext } from './Theme';
import "./App.css";

const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = JSON.parse(
    window.localStorage.getItem(LSKEY + ".todos")
  ) || [
    { id: 1, text: "My first todo", completed: false },
    { id: 2, text: "My second todo", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTodo = (newTodoText) => {
    let newTodo = {};
    if (todos.length === 0) {
      newTodo = { id: 0, text: newTodoText, completed: false };
      setTodos([newTodo]);
    } else
      newTodo = {
        id: todos[todos.length - 1].id + 1,
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
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default function AppWithThemeProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
