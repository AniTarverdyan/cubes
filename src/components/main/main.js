import { Cube } from "../cube/cube";
import "./main.css";

const Main = ({ cubes }) => {
  return (
    <div className="main">
      {cubes.map((cube, index) => {
        return <Cube key={index} cube={cube} />;
      })}
    </div>
  );
};
export { Main };
