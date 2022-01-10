import colorNames from "colornames";

export function Input({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add color name</label>
      <input
        type="text"
        autoFocus
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle text color
      </button>
    </form>
  );
}
