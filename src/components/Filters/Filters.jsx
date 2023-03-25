import {
  ButtonContainer,
  FilterButton,
  FiltersContainer,
  ItemsLeft,
} from "./Filters.components";

export const Filters = ({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <ButtonContainer>
        <FilterButton
          action={showAllTodos}
          active={activeFilter}
          filter="All"
        />
        <FilterButton
          action={showActiveTodos}
          active={activeFilter}
          filter="Active"
        />
        <FilterButton
          action={showCompletedTodos}
          active={activeFilter}
          filter="Completed"
        />
      </ButtonContainer>

      <button
        onClick={handleClearComplete}
        className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in"
      >
        Clear Completed
      </button>
    </FiltersContainer>
  );
};
