import { useFilter } from "../Context/FilterContext";

export default function FilterToggleBtn() {
  const { dispatch } = useFilter();

  return (
    <>
      <div className="toggleBtnContainer">
        <label className="toggleSwitch">
          <input
            className="toggleBtnInput"
            type="checkbox"
            name="toggleVeg"
            onChange={(event) =>
              dispatch({
                type: "TOGGLE_ISVEG",
                payload: { checked: event.target.checked },
              })
            }
          />{" "}
          <div className="thumbBtn"></div>
        </label>
        <span className="toggleBtnText">Veg Only</span>
      </div>
    </>
  );
}
