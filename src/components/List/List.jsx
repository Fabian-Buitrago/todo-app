import { Filters } from "../Filters";
import { Todo } from "../Todo/Todo";

export const List = ({ todos }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <Filters />
    </div>
  );
};
