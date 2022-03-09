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

  const bubbleSortCubes = () => {
    let newCubes = [...cubes];
    let length = newCubes.length;

    for (let j = 0; j < length - 1; j++) {
      for (let i = 0; i < length - 1; i++) {
        if (newCubes[i] < newCubes[i + 1]) {
          let a = newCubes[i];
          newCubes[i] = newCubes[i + 1];
          newCubes[i + 1] = a;
        }
      }
    }

    setCubes(newCubes);
  };

  const sortCubes = () => {
    let newCubes = [...cubes];

    newCubes.sort((c1, c2) => {
      return c2 - c1;
    });

    setCubes(newCubes);
  };

  const removeCube = (index) => {
    const newCubes = [...cubes];

    newCubes.splice(index, 1);

    setCubes(newCubes);
  };

  console.log(cubes);
  return (
    <div className={"app"}>
      <div className={"app-content"}>
        <div className={"app-header"}>
          <Header
            addCube={addCube}
            removeAllCubes={removeAllCubes}
            bubbleSortCubes={bubbleSortCubes}
            sortCubes={sortCubes}
          />
        </div>
        <div className={"app-main"}>
          <Main cubes={cubes} removeCube={removeCube} />
        </div>
        <div className={"app-footer"}>
          <Footer />
        </div>
      </div>
      <div className={"app-sidebar"}>
        <Aside />
      </div>
    </div>
  );
}

export default App;
