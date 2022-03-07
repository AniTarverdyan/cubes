import { useState } from "react";
import { Button } from "../../common";
import { Cubes } from "../cubes/cubes";
import "./header.css"

const Header = () => {
  const [cubes, setCubes] = useState([])

  const addCube = () => {
    setCubes({Cubes})
  }
  return (
    <header className="header">
      <Button onClick={() => console.log('hi')}>Sort</Button>
      <Button onClick={addCube} theme={"primary"}>Add</Button>
      <Button>Remove</Button>
    </header>
  );
};

export { Header };
