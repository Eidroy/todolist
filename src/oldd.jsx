// import { useState } from "react";
// import TodoItem from "./old";

// function TodoList() {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       text: "Go to BeCode",
//       completed: true,
//     },
//     {
//       id: 2,
//       text: "Kick ass",
//       completed: false,
//     },
//   ]);

//   const [text, setText] = useState("");
//   function addTask(text) {
//     const newTask = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     setTasks([...tasks, newTask]);
//     setText("");
//   }
//   function deleteTask(id) {
//     setTasks(tasks.filter((task) => task.id !== id));
//   }
//   function toggleCompleted(id) {
//     setTasks(
//       tasks.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: !task.completed };
//         } else {
//           return task;
//         }
//       })
//     );
//   }
//   return (
//     <div className="todo-list">
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={() => addTask(text)}>Add Todo</button>

//       {tasks.map((task) => (
//         <TodoItem
//           key={task.id}
//           task={task}
//           deleteTask={deleteTask}
//           toggleCompleted={toggleCompleted}
//         />
//       ))}
//     </div>
//   );
// }
// export default TodoList;
