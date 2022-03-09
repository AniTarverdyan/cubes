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

  return (
    <div className={"app"}>
      <div>
        <Header addCube={addCube} />
        <Main cubes={cubes} />
        <Footer />
      </div>
      <div>
        <Aside />
      </div>
    </div>
  );
}

export default App;
