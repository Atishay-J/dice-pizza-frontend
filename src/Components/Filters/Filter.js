import "./filter.css";
import FilterRadioBtns from "./FilterRadioBtn";
import FilterToggleBtn from "./FilterToggleBtn";

export default function Filters() {
  return (
    <div className="FilterContainer">
      <FilterRadioBtns />
      <FilterToggleBtn />
    </div>
  );
}
