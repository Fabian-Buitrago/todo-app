import { Filters } from "../Filters";

export const List = ({ children }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {children}
      <Filters />
    </div>
  );
};
