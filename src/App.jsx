import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hello = (props) => {
   console.log(props);
   return <h1>{props.name} from hello component</h1>;
};

const World = () => {
   return <div>World Component</div>;
};

function App() {
   const [world, setWorld] = useState("World");

   function setData() {
      setWorld((prev) => prev + "Hello");
   }

   useEffect(() => {
      console.log("Component did mount");

      return () => {
         console.log("component dihapus");
      };
   }, []);

   useEffect(() => {
      console.log("State is updating");
   }, [world]);

   return (
      <div>
         <h1>{world}</h1>
         <Link to={"/another"}>GO TO ANOTHER</Link>
         <Hello name={world} />
      </div>
   );
}

export default App;
