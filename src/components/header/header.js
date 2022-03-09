import { Button } from "../../common/button/button";
import "./header.css";

const Header = ({ addCube, removeAllCubes, sortCubes }) => {
  const onAddButtonClick = () => {
    addCube();
  };

  return (
    <header className={"header"}>
      <Button onClick={sortCubes}>Sort</Button>
      <Button onClick={onAddButtonClick} theme={"primary"}>
        Add
      </Button>
      <Button onClick={removeAllCubes}>Remove</Button>
    </header>
  );
};

export { Header };
