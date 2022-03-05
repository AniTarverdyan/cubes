import { Button } from "../../common";

const Header = () => {
  return (
    <header>
      <Button>Sort</Button>
      <Button theme={"primary"}>Add</Button>
      <Button>Remove</Button>
    </header>
  );
};

export { Header };
