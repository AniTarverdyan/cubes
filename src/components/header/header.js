import { useState } from "react";
import { Button } from "../../common/button/button";
import "./header.css";

const Header = ({ addCube, removeAllCubes, bubbleSortCubes, sortCubes }) => {
  const [num, setNum] = useState("");

  const onAddButtonClick = () => {
    if (num) {
      addCube(+num);
    } else {
      addCube();
    }
  };

  const setNumber = (e) => {
    setNum(e.target.value);
  };

  return (
    <header className={"header"}>
      <div>
        <Button onClick={bubbleSortCubes}>Bubble sort</Button>
        <Button onClick={sortCubes}>Sort</Button>
        <Button onClick={onAddButtonClick} theme={"primary"}>
          Add
        </Button>
        <Button onClick={removeAllCubes}>Remove all</Button>
      </div>

      <div className={"header-input"}>
        <input
          type={"number"}
          min={0}
          max={1000}
          value={num}
          onChange={setNumber}
          placeholder={"Input number"}
        />
      </div>
    </header>
  );
};

export { Header };
