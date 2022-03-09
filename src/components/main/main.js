import { Cube } from "../cube/cube";
import "./main.css";

const Main = ({ cubes, removeCube }) => {
   const onRemoveCube = () => {
     removeCube()
   }
    
  return (
    <div className="main">
      {cubes.map((cube, index) => {
        return <Cube key={index} cube={cube} removeCube={onRemoveCube} />;
      })}
    </div>
  );
};
export { Main };
