import "./cube.css";

const Cube = ({ cube }) => {
  return (
    <div className="cube">
      <img
        className="icon-close"
        src="https://cdn-icons-png.flaticon.com/128/3917/3917189.png"
      />
      {cube}
    </div>
  );
};

export { Cube };
