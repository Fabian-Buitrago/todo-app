import { useState } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Title } from "./components/Title";
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    if (!title) {
      return;
    }

    const newTodo = {
      id: uuid,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
  };

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <Input addTodo={addTodo} />
        <List todos={todos} handleSetComplete={handleSetComplete} />
      </div>
    </div>
  );
}

export default App;
