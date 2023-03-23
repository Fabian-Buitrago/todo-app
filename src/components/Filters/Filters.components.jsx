export const FiltersContainer = ({ children }) => (
  <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
    {children}
  </div>
);

export const ItemsLeft = ({ total = 0 }) => (
  <p className="text-gray-400 text-sm">{total} items left</p>
);

export const ButtonContainer = ({ children }) => (
  <div className="flex items-center space-x-2">{children}</div>
);

export const FilterButton = ({ action, active, filter }) => (
  <button
    className={
      `hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
      (active.toLowerCase().includes(filter.toLowerCase())
        ? "text-blue-400"
        : "text-gray-400")
    }
  >
    {filter}
  </button>
);
