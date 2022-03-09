import { Cube } from "../cube/cube";
import "./main.css";

const Main = ({ cubes, removeCube }) => {
  const onRemoveCube = (index) => () => {
    removeCube(index);
  };

  return (
    <div className="main">
      {cubes.map((cube, index) => {
        return (
          <Cube key={index} cube={cube} removeCube={onRemoveCube(index)} />
        );
      })}
    </div>
  );
};
export { Main };
