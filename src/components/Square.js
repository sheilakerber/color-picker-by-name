export function Square({ colorValue, hexValue, isDarkText }) {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p> <br />
      <h3>{hexValue ? "Hex value: " : null}</h3> <br />
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "Empty Color Value",
};
