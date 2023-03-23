import {
  ButtonContainer,
  FilterButton,
  FiltersContainer,
  ItemsLeft,
} from "./Filters.components";

export const Filters = () => {
  return (
    <FiltersContainer>
      <ItemsLeft />
      <ButtonContainer>
        <FilterButton action={() => {}} active="All" filter="All" />
        <FilterButton action={() => {}} active="All" filter="Active" />
        <FilterButton action={() => {}} active="All" filter="Completed" />
      </ButtonContainer>

      <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
        Clear Completed
      </button>
    </FiltersContainer>
  );
};
