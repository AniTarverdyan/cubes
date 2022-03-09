import { useState } from "react";
import "./app.css";
import { Aside } from "./components/aside/aside";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

function App() {
  const [cubes, setCubes] = useState([5, 3, 10, 6]);

  const addCube = (number) => {
    if (number === undefined) {
      number = Math.round(Math.random() * 1000);
    }
    setCubes([...cubes, number]);
  };

  const removeAllCubes = () => {
    setCubes([]);
  };

  const sortCubes = () => {
    let length = cubes.length;

    for (let j = 0; j < length - 1; j++) {
      for (let i = 0; i < length - 1; i++) {
        if (cubes[i] < cubes[i + 1]) {
          let a = cubes[i];
          cubes[i] = cubes[i + 1];
          cubes[i + 1] = a;
        }
      }
    }
    return cubes;
  };

  const removeCube = () => {
    const newCubes = cubes.filter((cubes, index) => {
      return index;
    });
    setCubes(newCubes);
  };

  return (
    <div className={"app"}>
      <div>
        <Header
          addCube={addCube}
          removeAllCubes={removeAllCubes}
          sortCubes={sortCubes}
        />
        <Main cubes={cubes} removeCube={removeCube} />
        <Footer />
      </div>
      <div>
        <Aside />
      </div>
    </div>
  );
}

export default App;
