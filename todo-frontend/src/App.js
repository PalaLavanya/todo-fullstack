import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API_URL = "http://localhost:8080/api/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;

    await axios.post(API_URL, {
      title,
      description,
      completed: false,
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`${API_URL}/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  return (
    <div className="container">
      <h1>✨ Todo Manager</h1>

      <div className="input-section">
        <input
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty">No tasks yet 👀</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-card ${todo.completed ? "completed" : ""}`}
            >
              <div
                className="todo-text"
                onClick={() => toggleComplete(todo)}
              >
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;