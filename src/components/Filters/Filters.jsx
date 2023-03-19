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
    </FiltersContainer>
  );
};
