import { useState } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Title } from "./components/Title";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Wath the next braking bad chapter",
      completed: false,
    },
    {
      id: 2,
      title: "Record next songs",
      completed: false,
    },
    {
      id: 3,
      title: "Wash dishes",
      completed: false,
    },
    {
      id: 4,
      title: "Study 2 hours",
      completed: false,
    },
  ]);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1] : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <Input addTodo={addTodo} />
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
