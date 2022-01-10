import colorNames from "colornames"

export function Input({ colorValue, setColorValue, setHexValue }) {
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
    </form>
  );
}
