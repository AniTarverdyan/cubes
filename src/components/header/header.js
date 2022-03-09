import { Button } from "../../common/button/button";
import "./header.css";

const Header = ({ addCube }) => {
  const onAddButtonClick = () => {
    addCube();
  };

  return (
    <header className={"header"}>
      <Button onClick={() => console.log("hi")}>Sort</Button>
      <Button onClick={onAddButtonClick} theme={"primary"}>
        Add
      </Button>
      <Button>Remove</Button>
    </header>
  );
};

export { Header };
