import "./cube.css";

const Cube = ({ cube, removeCube }) => {
  return (
    <div className="cube">
      <span onClick={removeCube} className="cube-remove-button">
        x
      </span>
      {cube}
    </div>
  );
};

export { Cube };
