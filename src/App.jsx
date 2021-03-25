import React, { useState, useRef } from "react";
import TodoComponent from "./TodoComponent";
import { FiSun, FiMoon } from "react-icons/fi";
import "./App.scss";

function App() {
  const [darkMode, setMode] = useState(true);
  const [todos, setTodos] = useState([]);
  const input_val = useRef();
  const clearAll = () => todos.length ? setTodos([]) : alert('List is already empty...');
  const removeItem = (todo_id) =>
    setTodos([...todos.filter((item) => item.id !== todo_id)]);
  const toggleMode = () => setMode(!darkMode);
  const updateList = (event) => {
    if (
      event.key === "Enter" &&
      input_val.current.value !== null &&
      input_val.current.value.length > 2
    ) {
      setTodos([
        ...todos,
        {
          id: Math.round(Math.random(100000) * 100),
          text: input_val.current.value,
        },
      ]);
      input_val.current.value = null;
    }
  };

  return (
    <div className={darkMode ? "body-dark" : "body-light"}>
      <div className="main-wrapper">
        <div className="header">
          <h1>TODO</h1>
          {darkMode ? (
            <FiSun className="mode-icon" onClick={toggleMode} />
          ) : (
            <FiMoon className="mode-icon" onClick={toggleMode} />
          )}
        </div>
        <input
          type="text"
          onKeyDown={updateList}
          ref={input_val}
          placeholder="Type here..."
        />
        <div className="component-holder">
          {todos.length
            ? todos.map((todo) => (
                <TodoComponent
                  text={todo.text}
                  darkMode={darkMode}
                  removeItem={removeItem}
                  id={todo.id}                  
                />
              ))
            : null}
        </div>
        <div className={darkMode ? "dark-footer" : "light-footer"}>
          {todos.length ?<p>{todos.length} items left</p> : <p>Empty list</p>}          
          <button onClick={clearAll}>Cleae All</button>    
        </div>
      </div>
    </div>
  );
}

export default App;
